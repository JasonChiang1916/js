/******************************************
 * @name 旺旺
 * @author 1916
 * @update 20250122
 * @version 1.0.0
 * @description 先人工签到一次获取token
--------------- Quantumult X 配置---------------
[mitm]
hostname = www.hotkidclub.com

[Rewrite Local]
^https:\/\/www\.hotkidclub\.com\/api\/campaign\/attendance\/draw\/luckyNew\.ctrl\?adid=hkc_mp-campaign_self-click-link-cV$ url script-request-body https://raw.githubusercontent.com/JasonChiang1916/js/refs/heads/main/task/ww.js

[task_local]
23 10 * * * https://raw.githubusercontent.com/JasonChiang1916/js/refs/heads/main/task/ww.js, tag=旺旺, img-url=https://raw.githubusercontent.com/Sliverkiss/QuantumultX/main/icon/nfsq.png, enabled=true

******************************************/
let goodsMsg = "";

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

async function pa(input) {
    let T;
    const R = new Array(128).fill(undefined);
    R.push(undefined, null, true, false);
    let W = R.length;

    function o(index) {
        return R[index];
    }

    function f(value) {
        W === R.length && R.push(R.length + 1);
        const idx = W;
        W = R[idx];
        R[idx] = value;
        return idx;
    }

    function ct(index) {
        const value = o(index);
        R[index] = W;
        W = index;
        return value;
    }

    const gt = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });

    function _() {
        return new Uint8Array(T.memory.buffer);
    }

    function $(ptr, len) {
        return gt.decode(_().subarray(ptr, ptr + len));
    }

    function oe(string, malloc, realloc) {
        const encoded = new TextEncoder("utf-8").encode(string);
        const ptr = malloc(encoded.length, 1) >>> 0;
        _().subarray(ptr, ptr + encoded.length).set(encoded);
        return ptr;
    }

    async function lt(wasmModuleUrl) {
        if (T !== undefined) return T;

        const imports = { wbg: {} };
        const response = await fetchRequest('GET', wasmModuleUrl, {}, null, null);
        const wasmBuffer = await response.arrayBuffer();

        const { instance } = await WebAssembly.instantiate(wasmBuffer, imports);
        T = instance.exports;
        return T;
    }

    const wasmUrl = "https://static-cpn.hotkidclub.com/cpn/2025year/assets/campaign_bg-9d108286.wasm";
    await lt(wasmUrl);

    const result = T.get_timestamp(f(input));
    return $(result, 128); // Adjust buffer size based on expected response length
}

// 获取用户数据
function GetCookie() {
    try {
        const headers = $request.headers;

        // 提取请求头中的 apitoken
        const token = headers['cookie'];

        // 持久化存储 token
        if (token) {
            $prefs.setValueForKey(token, 'wangwang');
            console.log(`wangwang 已保存: ${token}`);
            $notify("🍀 获取wangwang成功", "", token);
        }

    } catch (e) {
        $notify("⛔️ 获取Cookie失败", "", `错误: ${e.message}`);
    } finally {
        $done();
    }
}

async function grabGameGetFragment(grade, token, taskName) {
    const headers = {
        "Accept": "*/*",
        "Accept-Language": "en,zh-CN;q=0.9,zh;q=0.8",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Cookie": token,
        "Origin": "https://www.hotkidclub.com",
        "Referer": "https://www.hotkidclub.com/cpn/2025year/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Timestamp": "1735188280977",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
        "sec-ch-ua": '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"'
    };

    const json_data = {
        grade: grade,
        score: 50,
        channel: "其他H5",
        isPass: 1,
        adid: "2025festival-campaign_self-click-link-1i6"
    };

    if (grade === 1) {
        json_data["score"] = 30;
    } else if (grade === 2) {
        json_data["score"] = 50;
    }
    const timestamp = await pa(json_data);
    headers["Timestamp"] = timestamp.replace(/\n/g, "").replace(/\s/g, "");
    try {
        const response = await fetchRequest("https://www.hotkidclub.com/api/cpn/year2025/grabGameGetFragment.ctrl", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(json_data)
        });
        const result = await response.json();
        const code = result.Response.code;
        if (code === 10001) {
            console.log(`${taskName}：完成`);
            goodsMsg += `${taskName}：完成\n`;
        } else {
            console.log(`${taskName}：${result.Response.sub_msg}`);
            goodsMsg += `${taskName}：${result.Response.sub_msg}\n`;
        }
    } catch (error) {
        console.error(error);
    }
}

async function draw(cookie, jc) {
    const url = 'https://www.hotkidclub.com/api/draw_centre/draw2025Year.ctrl';
    const headers = {
        "Host": "www.hotkidclub.com",
        "Connection": "keep-alive",
        "Content-Length": "120",
        "sec-ch-ua-platform": "Android",
        "Timestamp": String(Date.now()),
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.6723.103 Mobile Safari/537.36 XWEB/1300289 MMWEBSDK/20241103 MMWEBID/6533 MicroMessenger/8.0.55.2780(0x2800373D) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 miniProgram/wxe2c4192bf307ccff",
        "sec-ch-ua": '"Chromium";v="130", "Android WebView";v="130", "Not?A_Brand";v="99"',
        "Content-Type": "application/json",
        "sec-ch-ua-mobile": "?1",
        "Accept": "*/*",
        "Origin": "https://www.hotkidclub.com",
        "X-Requested-With": "com.tencent.mm",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://www.hotkidclub.com/",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "Cookie": cookie
    };

    const data = jc === 1 ?
        { "drawType": 1, "acType": 1, "platform": "WEB", "channel": "WEIXINMP", "adid": "2025festival-hotkidclub-click-2025_festival-1j8" } :
        { "drawType": 2, "acType": 1, "platform": "WEB", "channel": "WEIXINMP", "adid": "2025festival-hotkidclub-click-2025_festival-1j8" };

    try {
        const response = await fetchRequest(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        });
        const result = await response.json();
        const code = result.Response.code;
        if (code === 10001) {
            console.log(`奖池抽奖：${result.Response.data.drawInfoList[0].drawInfoList}`);
            goodsMsg += `奖池抽奖：${result.Response.data.drawInfoList[0].drawInfoList}\n`;
        } else {
            console.log(`奖池抽奖：${result.Response.sub_msg}`);
            goodsMsg += `奖池抽奖：${result.Response.sub_msg}\n`;
        }
    } catch (error) {
        console.error(error);
    }
}

async function cpnSign(cookie) {
    const url = 'https://www.hotkidclub.com/api/cpn/year2025/cpnSign.ctrl';
    const payload = {
        "adid": "2025festival-hotkidclub-click-2025_festival-1j8"
    };

    const headers = {
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; IN2010 Build/RKQ1.211119.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.6723.102 Mobile Safari/537.36 XWEB/1300073 MMWEBSDK/20240501 MMWEBID/4970 MicroMessenger/8.0.50.2701(0x2800325B) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 miniProgram/wxe2c4192bf307ccff",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Content-Type": "application/json",
        "sec-ch-ua-platform": '"Android"',
        "Timestamp": String(Date.now()),
        "sec-ch-ua": '"Chromium";v="130", "Android WebView";v="130", "Not?A_Brand";v="99"',
        "sec-ch-ua-mobile": "?1",
        "Origin": "https://www.hotkidclub.com",
        "X-Requested-With": "com.tencent.mm",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://www.hotkidclub.com/",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "Cookie": cookie
    };

    try {
        const response = await fetchRequest(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        });
        const result = await response.json();
        const code = result.Response.code;

        if (code === 10001) {
            console.log('每日签到：完成');
            goodsMsg += `每日签到：完成\n`;
        } else {
            console.log(`每日签到：${result.Response.sub_msg}`);
            goodsMsg += `每日签到：${result.Response.sub_msg}\n`;
        }
    } catch (error) {
        console.error(error);
    }
}


async function Sign(cookie) {
    const url = 'https://www.hotkidclub.com/api/campaign/attendance/draw/luckyNew.ctrl';
    const headers = {
        'Host': 'www.hotkidclub.com',
        'Connection': 'keep-alive',
        'Login-Status': 'HAS_SESS',
        'content-type': 'application/json',
        'Has-Sess': 'TRUE',
        'Accept-Encoding': 'gzip,compress,br,deflate',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.51(0x1800332e) NetType/4G Language/zh_CN',
        'Referer': 'https://servicewechat.com/wxe2c4192bf307ccff/311/page-frame.html',
        "Cookie": cookie
    };
    const params = {
        adid: 'hkc_mp-campaign_self-click-link-cV'
    };
    const body = null;
    try {
        const response = await fetchRequest('GET', url, headers, params, body);
        const result = await response.json();
        const code = result.Response.code;
        if (code === 10001) {
            console.log('每日签到：完成');
            goodsMsg += `每日签到：每日签到：完成\n`;
        } else {
            console.log(`每日签到：${result.Response.sub_msg}`);
            goodsMsg += `每日签到：${result.Response.sub_msg}\n`;
        }
    } catch (error) {
        console.error(error);
    }
}

async function run(cookie, jc) {
    // await cpnSign(cookie);
    await Sign(cookie);
    const url = 'https://www.hotkidclub.com/api/cpn/year2025/taskList.ctrl';
    const headers = {
        "Host": "www.hotkidclub.com",
        "Connection": "keep-alive",
        "Content-Length": "18",
        "sec-ch-ua-platform": "Android",
        "Timestamp": String(Date.now()),
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.6723.103 Mobile Safari/537.36 XWEB/1300289 MMWEBSDK/20241103 MMWEBID/6533 MicroMessenger/8.0.55.2780(0x2800373D) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 miniProgram/wxe2c4192bf307ccff",
        "sec-ch-ua": '"Chromium";v="130", "Android WebView";v="130", "Not?A_Brand";v="99"',
        "Content-Type": "application/json",
        "sec-ch-ua-mobile": "?1",
        "Accept": "*/*",
        "Origin": "https://www.hotkidclub.com",
        "X-Requested-With": "com.tencent.mm",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://www.hotkidclub.com/",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "Cookie": cookie
    };
    const data = { platformType: 1 };
    const response = await fetchRequest('POST', url, headers, null, data);
    if (response && response.Response.code === 10001) {
        console.log('开始游戏集卡任务');
        goodsMsg += `开始游戏集卡任务\n`;
        const taskList = response.Response.data.taskList || [];
        for (const task of taskList) {
            const { taskName, type, status } = task;
            if (status === 2) {
                console.log(`${taskName}：任务已完成，领卡已完成`);
                goodsMsg += `${taskName}：任务已完成，领卡已完成\n`;
            } else if (status === 1) {
                console.log(`${taskName}：任务已完成，领卡未完成,去领卡`);
                goodsMsg += `${taskName}：任务已完成，领卡未完成,去领卡\n`;
                await getFragments(cookie, taskName, type);
            } else {
                console.log(`${taskName}：任务未完成，领卡未完成，去做任务及领卡`);
                goodsMsg += `${taskName}：任务未完成，领卡未完成，去做任务及领卡\n`;
                if (taskName === "每日游戏") {
                    for (let i = 1; i <= 3; i++) {
                        console.log(`第${i}轮游戏中,等待150秒`);
                        goodsMsg += `第${i}轮游戏中,等待150秒\n`;
                        const grade = await startGame(cookie);
                        await new Promise(resolve => setTimeout(resolve, 150 * 1000));
                        await grabGameGetFragment(grade, cookie, taskName);
                    }
                } else {
                    await dotask(cookie, taskName, type);
                    await getFragments(cookie, taskName, type);
                }
            }
        }
        await draw(cookie, jc);
    } else {
        console.log('ck异常');
        goodsMsg += `ck异常\n`;
    }
}

async function dotask(cookie, taskName, type) {
    const url = 'https://www.hotkidclub.com/api/cpn/year2025/completeBrowseTask.ctrl';
    const headers = {
        "Host": "www.hotkidclub.com",
        "Connection": "keep-alive",
        "Content-Length": "10",
        "Login-Status": "HAS_SESS",
        "Has-Sess": "TRUE",
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.6723.103 Mobile Safari/537.36 XWEB/1300289 MMWEBSDK/20241103 MMWEBID/6533 MicroMessenger/8.0.55.2780(0x2800373D) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 MiniProgramEnv/android",
        "Content-Type": "application/json",
        "charset": "utf-8",
        "Referer": "https://servicewechat.com/wxe2c4192bf307ccff/310/page-frame.html",
        "Accept-Encoding": "gzip, deflate, br",
        "Cookie": cookie
    };
    const data = { type };
    const response = await fetchRequest('POST', url, headers, null, data);
    if (response && response.Response.code === 10001) {
        console.log(`${taskName}：完成`);
        goodsMsg += `${taskName}：完成\n`;
    } else {
        console.log(`${taskName}：${response.Response.sub_msg}`);
        goodsMsg += `${taskName}：${response.Response.sub_msg}\n`;
    }
}

async function getFragments(cookie, taskName, type) {
    const url = 'https://www.hotkidclub.com/api/cpn/year2025/getFragment.ctrl';
    const headers = {
        "Host": "www.hotkidclub.com",
        "Connection": "keep-alive",
        "Content-Length": "63",
        "sec-ch-ua-platform": "Android",
        "Timestamp": String(Date.now()),
        "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Build/QKQ1.190828.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.6723.103 Mobile Safari/537.36 XWEB/1300289 MMWEBSDK/20241103 MMWEBID/6533 MicroMessenger/8.0.55.2780(0x2800373D) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 miniProgram/wxe2c4192bf307ccff",
        "sec-ch-ua": '"Chromium";v="130", "Android WebView";v="130", "Not?A_Brand";v="99"',
        "Content-Type": "application/json",
        "sec-ch-ua-mobile": "?1",
        "Accept": "*/*",
        "Origin": "https://www.hotkidclub.com",
        "X-Requested-With": "com.tencent.mm",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        "Referer": "https://www.hotkidclub.com/",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        "Cookie": cookie
    };
    const timestamp = await pa(json_data);
    headers["Timestamp"] = timestamp.replace(/\n/g, "").replace(/\s/g, "");
    const data = { "getWay": type, "adid": "2025festival-campaign_self-click-link-1j8" };
    const response = await fetchRequest('POST', url, headers, null, data);
    if (response && response.Response.code === 10001) {
        console.log(`${taskName}：成功获取碎片`);
        goodsMsg += `${taskName}：成功获取碎片\n`;
    } else {
        console.log(`${taskName}：获取碎片失败，原因：${response.Response.sub_msg}`);
        goodsMsg += `${taskName}：获取碎片失败，原因：${response.Response.sub_msg}\n`;
    }
}

async function startGame(cookie) {
    const url = 'https://www.hotkidclub.com/api/cpn/year2025/startGame.ctrl';
    const headers = {
        'Accept': '*/*',
        'Accept-Language': 'en,zh-CN;q=0.9,zh;q=0.8',
        'Connection': 'keep-alive',
        'Cookie': cookie,
        'Referer': 'https://www.hotkidclub.com/cpn/2025year/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'Timestamp': '1735189648064',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
    };
    const response = await fetchRequest('POST', url, headers, null, {});
    if (response && response.Response.code === 10001) {
        console.log('游戏开始成功');
        goodsMsg += `游戏开始成功\n`;
        return response.Response.data.grade;
    } else {
        console.log('游戏开始失败');
        goodsMsg += `游戏开始失败\n`;
        return null;
    }
}


// 脚本执行入口
!(async () => {
    if (typeof $request !== `undefined`) {
        GetCookie();
    } else {
        const apitokens = $prefs.valueForKey("wangwang");
        if (!apitokens) {
            $notify("错误", "", "没有配置 wangwang 环境变量");
            $done();
        }
        const apitokenList = apitokens.split("#");
        for (const apitoken of apitokenList) {
            await run(apitoken,2);
        }
        $notify("旺旺执行结果", ``, `详情：\n${goodsMsg}`);
        $done();
    }
})()
    .catch((e) => $.messages.push(e.message || e) && $.logErr(e))
