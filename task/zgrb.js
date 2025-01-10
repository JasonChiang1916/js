/**
 * 中国人保 - QuantumultX 任务脚本
 * 脚本作者: 莫老师
 * 版本: 2.1
 * cron: 5 1 * * *
 */

const zgrbck = $prefs.valueForKey("zgrb_data");

const url = "zgrb.epicc.com.cn";
const url2 = "dop.picc.com.cn";
let goodsMsg = "执行结果：\n";

if (!zgrbck) {
    console.log("未配置 zgrbck 环境变量");
    $done();
}

const accounts = JSON.parse(zgrbck);
const tasks = [];

(async () => {
    for (let i = 0; i < accounts.length; i++) {
        const thirdPartyId = accounts[i].thirdPartyId;
        const deviceId = accounts[i].deviceId;
        const token = await login(thirdPartyId, deviceId);
        if (!token) {
            console.log(`账号${i + 1} 登录失败`);
            $notify("中国人保", `账号${i + 1} 登录失败，请检查`, "");
            continue;
        }
        console.log(`账号${i + 1} 登录成功`);

        // 签到
        await signIn(token);

        // 完成任务
        await completeTasks(token);

        // 盲盒抽奖
        const reward = await drawBlindBox(token);
        if (reward) {
            console.log(`账号${i + 1} 盲盒抽奖结果: ${reward}`);
            goodsMsg += `🎁 账号${i + 1} 盲盒抽奖结果: ${reward}\n`;
        } else {
            console.log(`账号${i + 1} 盲盒未中奖或无次数`);
        }

        // 查询积分
        const totalScore = await getScore(token);
        console.log(`账号${i + 1} 当前积分: ${totalScore}`);
        goodsMsg += `🎁 账号${i + 1} 当前积分: ${totalScore}\n`;

        //发送通知
        $notify("中国人保", `签到`, goodsMsg);

    }
    $done();
})();

function login(thirdPartyId, deviceId) {
    return new Promise(resolve => {
        const body = {
            body: { signInType: "0", thirdPartyId },
            head: {
                accessToken: "",
                adCode: "350100",
                appInfo: { appBuild: "285", appVersion: "6.23.12" },
                deviceInfo: { deviceId, deviceModel: "23049RAD8C", osType: "android", osVersion: "13", romType: "2", romVersion: "0" },
                tags: { tags: [], tagsLogin: [] },
                token: "",
                userId: ""
            },
            uuid: generateUUID()
        };
        const options = {
            url: `https://${url}/G-BASE/a/user/login/thirdPartyLogin/v1`,
            headers: { "Content-Type": "application/json; charset=UTF-8" },
            body: JSON.stringify(body)
        };
        $httpClient.post(options, (err, resp, data) => {
            if (err) {
                console.log(`登录失败: ${err}`);
                resolve(null);
                return;
            }
            const ck = resp.headers["Authorization"];
            resolve(ck);
        });
    });
}

function signIn(token) {
    return new Promise(resolve => {
        const options = {
            url: `https://${url2}/dop/scoremall/coupon/ut/signIn`,
            headers: { "x-app-auth-type": "APP", "Content-Type": "application/json;charset=UTF-8", "x-app-auth-token": token },
            body: "{}"
        };
        $httpClient.post(options, (err, resp, data) => {
            if (err) console.log(`签到失败: ${err}`);
            resolve();
        });
    });
}

function completeTasks(token) {
    return new Promise(resolve => {
        const options = {
            url: `https://${url2}/dop/scoremall/coupon/ut/task/list`,
            headers: { "x-app-auth-type": "APP", "Content-Type": "application/json;charset=UTF-8", "x-app-score-platform": "picc-app", "x-app-score-channel": "picc-app001", "x-app-auth-token": token },
            body: JSON.stringify({ type: 2, ver: "gNMJgr8lU5d8FeDKCaOiUoLFMJPYHw71bPvzr3MQOqncg+B546XRn2jpAgh0oj7RLYNl6Q1q+khuQxYsPDnUEMOHVkWH+z4xv/eVeW0+4Ar1UIGSNBvIT6nAx9TQ5MKeaIlcAx0vasj7xUgXijNoR2/laSI2sPN1W24oL7Oz6WezdfsdmU+dYF39X1bxUCKlYcUKTD7gdAfG7T6hq+3P2eFKQxE/fjalfAtYO9Iw6wpWIexamCu6yagIvsMx90Rn7nShEa+BE6ulNWlYj4YrjyHh1DS6KKm9rJ0VGRmtadHLW5WZdTJKmU3WEvjm0/h+3NCFAxf0u4hFRQQcTQs2+A==", localizedModel: "", platform: "" })
        };
        $httpClient.post(options, (err, resp, data) => {
            if (err) console.log(`获取任务失败: ${err}`);
            resolve();
        });
    });
}

function drawBlindBox(token) {
    return new Promise(resolve => {
        const options = {
            url: `https://${url2}/dop/scoremall/coupon/blindBox/draw`,
            headers: { "x-app-auth-type": "APP", "Content-Type": "application/json;charset=UTF-8", "x-app-score-platform": "picc-app", "x-app-score-channel": "picc-app001", "x-app-auth-token": token },
            body: "{}"
        };
        $httpClient.post(options, (err, resp, data) => {
            if (err) console.log(`盲盒抽奖失败: ${err}`);
            const result = JSON.parse(data).result;
            resolve(result ? result.blindBoxGoodsVO.productName : null);
        });
    });
}

function getScore(token) {
    return new Promise(resolve => {
        const options = {
            url: `https://${url2}/dop/scoremall/score/internal/scoreAccount/queryMyScoreAccount`,
            headers: { "x-app-auth-type": "APP", "Content-Type": "application/json;charset=UTF-8", "x-app-score-platform": "picc-app", "x-app-score-channel": "picc-app001", "x-app-auth-token": token },
            body: "{}"
        };
        $httpClient.post(options, (err, resp, data) => {
            if (err) console.log(`查询积分失败: ${err}`);
            const result = JSON.parse(data).result;
            resolve(result ? result.totalScore : 0);
        });
    });
}



function generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0;
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
}
