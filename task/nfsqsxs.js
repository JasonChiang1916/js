/******************************************
 * @name 农夫山泉生肖水
 * @author 1916
 * @update 20250109
 * @version 1.1.0
 
--------------- Quantumult X 配置---------------
[task_local]
30 9 * * * https://raw.githubusercontent.com/JasonChiang1916/js/refs/heads/main/task/nfsqsxs.js, tag=农夫山泉生肖水, img-url=https://raw.githubusercontent.com/Sliverkiss/QuantumultX/main/icon/nfsq.png, enabled=true

******************************************/

const API_BASE_URL = "https://gateway.jmhd8.com";
const USER_INFO_URL = `${API_BASE_URL}/geement.usercenter/api/v1/user/information`;
const TASK_LIST_URL = `${API_BASE_URL}/geement.marketingplay/api/v1/task`;
const JOIN_TASK_URL = `${API_BASE_URL}/geement.marketingplay/api/v1/task/join`;
const LOTTERY_URL = "https://thirtypro.jmhd8.com/api/v1/nongfuwater/snake/checkerboard/lottery";
const MARKETING_LOTTERY_URL = `${API_BASE_URL}/geement.marketinglottery/api/v1/marketinglottery`;
const TODAY_COUNT_URL = `${API_BASE_URL}/geement.actjextra/api/v1/act/lottery/data/todaycount`;
const GOODS_SIMPLE_URL = `${API_BASE_URL}/geement.actjextra/api/v1/act/win/goods/simple`;

const HEADERS = {
    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c11)XWEB/11581",
    'content-type': "application/x-www-form-urlencoded",
    'xweb_xhr': "1",
    'unique_identity': "b78effb9-789e-416c-8e2b-84f7d9dadbb6",
    'sec-fetch-site': "cross-site",
    'sec-fetch-mode': "cors",
    'sec-fetch-dest': "empty",
    'referer': "https://servicewechat.com/wxd79ec05386a78727/86/page-frame.html",
    'accept-language': "zh-CN,zh;q=0.9"
};

const apitokens = $prefs.valueForKey("nfsq");
const nfsqplayload = $prefs.valueForKey("nfsqplayload");
if (!apitokens) {
    $notify("错误", "", "没有配置 nfsq 环境变量");
    $done();
}
if (!nfsqplayload) {
    $notify("错误", "", "没有配置 nfsqplayload 环境变量");
    $done();
}

const apitokenList = apitokens.split("#");
const playload = JSON.parse(nfsqplayload);

function fetchRequest(method, url, headers, params, body) {
    let query = params ? '?' + new URLSearchParams(params).toString() : '';
    const options = {
        url: url + query,
        method: method,
        headers: headers,
        body: body ? JSON.stringify(body) : undefined
    };
    return $task.fetch(options).then(response => {
        try {
            return JSON.parse(response.body);
        } catch (error) {
            console.log("JSON解析错误：", error);
            return null;
        }
    }, reason => {
        console.log("请求错误：", reason.error);
        return null;
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function randomSleep(min = 1000, max = 5000) {
    const delay = Math.floor(Math.random() * (max - min + 1)) + min;
    await sleep(delay);
}

async function login(apitoken) {
    const headers = { ...HEADERS, 'apitoken': apitoken };
    const response = await fetchRequest("GET", USER_INFO_URL, headers);
    if (!response) {
        console.log("登录失败，跳过该账号");
        return [null, null];
    }
    if (response.data) {
        return [response.data.user_no, response.data.nick_name];
    }
    return [null, null];
}

async function getTaskList(apitoken) {
    const headers = { ...HEADERS, 'apitoken': apitoken };
    const params = { 'pageNum': '1', 'pageSize': '10', 'task_status': '2', 'status': '1', 'group_id': '24121016331837' };
    const response = await fetchRequest("GET", TASK_LIST_URL, headers, params);
    return response && response.data ? response.data : [];
}

async function doTask(taskId, apitoken) {
    const headers = { ...HEADERS, 'apitoken': apitoken };
    const params = { 'action_time': new Date().toISOString(), 'task_id': taskId };
    const response = await fetchRequest("GET", JOIN_TASK_URL, headers, params);
    console.log(JSON.stringify(response));
}

async function lottery(apitoken) {
    const headers = { ...HEADERS, 'apitoken': apitoken, 'Content-Type': "application/json" };
    const response = await fetchRequest("POST", LOTTERY_URL, headers, null, playload);
    return response;
}

async function marketingLottery(apitoken) {
    const headers = { ...HEADERS, 'apitoken': apitoken, 'Content-Type': "application/json" };
    const response = await fetchRequest("POST", MARKETING_LOTTERY_URL, headers, null, playload);

    if (response && response.code === 500) {
        console.log(response.msg);
        return null;
    } else if (response && response.data && response.data.prizedto) {
        const prizeInfo = response.data.prizedto;
        const prizeName = prizeInfo.prize_name || "未知奖品";
        const prizeLevel = prizeInfo.prize_level || "未知等级";
        console.log(`🎉 恭喜中奖：${prizeName}，等级：${prizeLevel}`);
        return `🎁 ${prizeName}（等级：${prizeLevel}）`;
    } else {
        console.log("未获取到有效的中奖信息");
        return null;
    }
}


async function todayCount(apitoken) {
    const headers = { ...HEADERS, 'apitoken': apitoken };
    const params = { 'act_code': "ACT2412101428048" };
    const response = await fetchRequest("GET", TODAY_COUNT_URL, headers, params);
    return response && response.data ? response.data : 0;
}

async function goodsSimple(apitoken) {
    const headers = { ...HEADERS, 'apitoken': apitoken };
    const params = { 'act_codes': "ACT2412101428048,ACT24121014352835,ACT24121014371732" };
    const response = await fetchRequest("GET", GOODS_SIMPLE_URL, headers, params);
    return response && response.data ? response.data : [];
}

async function processAccount(apitoken) {
    const [userNo, nickName] = await login(apitoken);
    if (!userNo) {
        console.log("账号登录失败，跳过");
        return;
    }

    console.log(`账号 nick_name:${nickName || userNo}`);

    const everyDataCounted = await todayCount(apitoken);
    console.log("每日赠送抽奖", `[${everyDataCounted}次]`);

    let prizeMessages = [];
    if (everyDataCounted < 3) {
        for (let i = 0; i < 3 - everyDataCounted; i++) {
            const prizeMessage = await marketingLottery(apitoken);
            if (prizeMessage) {
                prizeMessages.push(prizeMessage);
            }
            await randomSleep();
        }
    }

    const taskList = await getTaskList(apitoken);
    if (taskList.length === 0) {
        console.log("当前无任务可执行");
        return;
    }

    console.log("======执行任务======");
    for (const task of taskList) {
        const taskName = task.name;
        const taskStatus = task.complete_status;
        const taskId = task.id;
        const allowCompleteCount = task.allow_complete_count;
        const completeCount = task.complete_count;

        if (taskStatus === 1) {
            console.log(`${taskName} 已完成,跳过`);
            marketingLottery(apitoken).then(prizeMessage => {
                if (prizeMessage) {
                    prizeMessages.push(prizeMessage);
                }
            });
            await randomSleep();
        } else {
            console.log(`开始 ${taskName} [${completeCount}/${allowCompleteCount}]`);
            for (let i = 0; i < allowCompleteCount - completeCount; i++) {
                await doTask(taskId, apitoken);
                await randomSleep();
                marketingLottery(apitoken).then(prizeMessage => {
                    if (prizeMessage) {
                        prizeMessages.push(prizeMessage);
                    }
                });
                await randomSleep();
            }
        }
    }

    console.log("执行时来运转游戏");
    for (let i = 0; i < 3; i++) {
        const lotteryMes = await lottery(apitoken);
        if (lotteryMes && lotteryMes.success === false) {
            console.log(lotteryMes.msg);
            break;
        } else if (lotteryMes && lotteryMes.data) {
            console.log(lotteryMes.data);
            prizeMessages.push(`🎁 ${lotteryMes.data}`);
        } else {
            console.log("抽奖请求失败");
        }
        await randomSleep();
    }

    console.log("======查询奖品======");
    const goodsList = await goodsSimple(apitoken);
    let goodsMsg = "奖品清单：\n";
    for (const good of goodsList) {
        if (good.win_goods_name) {
            goodsMsg += `🎁 ${good.win_goods_name}\n`;
        }
    }
    console.log(goodsMsg);

    // 合并中奖信息
    const finalPrizeMessage = prizeMessages.length > 0 ? prizeMessages.join("\n") : "未中奖";
    $notify("农夫山泉抽奖结果", `账号：${nickName || userNo}`, `${goodsMsg}\n中奖详情：\n${finalPrizeMessage}`);
}


(async () => {
    for (const apitoken of apitokenList) {
        await processAccount(apitoken);
    }
    $done();
})();
