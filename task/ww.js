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
const $ = new Env('旺旺')
let goodsMsg = "";

async function fetchRequest(method, url, headers, params, body) {
    let query = params ? '?' + new URLSearchParams(params).toString() : '';
    const options = {
        url: url + query,
        headers: headers,
        body: body ? JSON.stringify(body) : undefined
    };

    if (method === 'GET') {
        $.get(options, (err, resp, data) => {
            try {
                let res = JSON.parse(data);
                resolve(res);
            } catch (error) {
                resolve(`❌ JSON解析异常`);
            }
        })
    } else {
        $.post(options, (err, resp, data) => {
            try {
                let res = JSON.parse(data);
                resolve(res);
            } catch (error) {
                resolve(`❌ JSON解析异常`);
            }
        })
    }    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


let pa = async (t) => {

    let T;
    const R = new Array(128).fill(void 0);
    function o(e) {
        return R[e]
    }
    R.push(void 0, null, !0, !1);
    let W = R.length;
    function f(e) {
        W === R.length && R.push(R.length + 1);
        const t = W;
        return W = R[t],
            R[t] = e,
            t
    }
    function ct(e) {
        const t = o(e);
        return function (a) {
            a < 132 || (R[a] = W,
                W = a)
        }(e),
            t
    }
    const gt = typeof TextDecoder < "u" ? new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
    }) : {
        decode: () => {
            throw Error("TextDecoder not available")
        }
    };
    typeof TextDecoder < "u" && gt.decode();
    let L = null;
    function _() {
        return L !== null && L.byteLength !== 0 || (L = new Uint8Array(T.memory.buffer)),
            L
    }
    function $(e, t) {
        return e >>>= 0,
            gt.decode(_().subarray(e, e + t))
    }
    function H(e) {
        return e == null
    }
    let K = null
        , q = null;
    function C() {
        return q !== null && q.byteLength !== 0 || (q = new Int32Array(T.memory.buffer)),
            q
    }
    let O = 0;
    const ee = typeof TextEncoder < "u" ? new TextEncoder("utf-8") : {
        encode: () => {
            throw Error("TextEncoder not available")
        }
    }
        , Gt = typeof ee.encodeInto == "function" ? function (e, t) {
            return ee.encodeInto(e, t)
        }
            : function (e, t) {
                const a = ee.encode(e);
                return t.set(a),
                {
                    read: e.length,
                    written: a.length
                }
            }
        ;
    function oe(e, t, a) {
        if (a === void 0) {
            const n = ee.encode(e)
                , g = t(n.length, 1) >>> 0;
            return _().subarray(g, g + n.length).set(n),
                O = n.length,
                g
        }
        let i = e.length
            , s = t(i, 1) >>> 0;
        const A = _();
        let r = 0;
        for (; r < i; r++) {
            const n = e.charCodeAt(r);
            if (n > 127)
                break;
            A[s + r] = n
        }
        if (r !== i) {
            r !== 0 && (e = e.slice(r)),
                s = a(s, i, i = r + 3 * e.length, 1) >>> 0;
            const n = _().subarray(s + r, s + i);
            r += Gt(e, n).written
        }
        return O = r,
            s
    }
    let te = 128;
    function pt(e) {
        let t, a;
        try {
            const c = T.__wbindgen_add_to_stack_pointer(-16);
            T.get_timestamp(c, function (u) {
                if (te == 1)
                    throw new Error("out of js stack");
                return R[--te] = u,
                    te
            }(e));
            var i = C()[c / 4 + 0]
                , s = C()[c / 4 + 1]
                , A = C()[c / 4 + 2]
                , r = C()[c / 4 + 3]
                , n = i
                , g = s;
            if (r)
                throw n = 0,
                g = 0,
                ct(A);
            return t = n,
                a = g,
                $(n, g)
        } finally {
            T.__wbindgen_add_to_stack_pointer(16),
                R[te++] = void 0,
                T.__wbindgen_free(t, a, 1)
        }
    }
    function ge(e, t) {
        try {
            return e.apply(this, t)
        } catch (a) {
            T.__wbindgen_exn_store(f(a))
        }
    }


    function Et() {
        const e = {
            wbg: {}
        };
        return e.wbg.__wbg_new_3830e8137e71ec75 = function () {
            return f(new Date)
        }
            ,
            e.wbg.__wbg_getTime_2246299160f4a9b5 = function (t) {
                return o(t).getTime()
            }
            ,
            e.wbg.__wbindgen_is_null = function (t) {
                return o(t) === null
            }
            ,
            e.wbg.__wbindgen_object_clone_ref = function (t) {
                return f(o(t))
            }
            ,
            e.wbg.__wbindgen_object_drop_ref = function (t) {
                ct(t)
            }
            ,
            e.wbg.__wbindgen_string_new = function (t, a) {
                return f($(t, a))
            }
            ,
            e.wbg.__wbindgen_boolean_get = function (t) {
                const a = o(t);
                return typeof a == "boolean" ? a ? 1 : 0 : 2
            }
            ,
            e.wbg.__wbindgen_is_bigint = function (t) {
                return typeof o(t) == "bigint"
            }
            ,
            e.wbg.__wbindgen_number_get = function (t, a) {
                const i = o(a)
                    , s = typeof i == "number" ? i : void 0;
                (K !== null && K.byteLength !== 0 || (K = new Float64Array(T.memory.buffer)),
                    K)[t / 8 + 1] = H(s) ? 0 : s,
                    C()[t / 4 + 0] = !H(s)
            }
            ,
            e.wbg.__wbindgen_bigint_from_i64 = function (t) {
                return f(t)
            }
            ,
            e.wbg.__wbindgen_jsval_eq = function (t, a) {
                return o(t) === o(a)
            }
            ,
            e.wbg.__wbindgen_string_get = function (t, a) {
                const i = o(a)
                    , s = typeof i == "string" ? i : void 0;
                var A = H(s) ? 0 : oe(s, T.__wbindgen_malloc, T.__wbindgen_realloc)
                    , r = O;
                C()[t / 4 + 1] = r,
                    C()[t / 4 + 0] = A
            }
            ,
            e.wbg.__wbindgen_is_object = function (t) {
                const a = o(t);
                return typeof a == "object" && a !== null
            }
            ,
            e.wbg.__wbindgen_in = function (t, a) {
                return o(t) in o(a)
            }
            ,
            e.wbg.__wbindgen_bigint_from_u64 = function (t) {
                return f(BigInt.asUintN(64, t))
            }
            ,
            e.wbg.__wbindgen_error_new = function (t, a) {
                return f(new Error($(t, a)))
            }
            ,
            e.wbg.__wbindgen_jsval_loose_eq = function (t, a) {
                return o(t) == o(a)
            }
            ,
            e.wbg.__wbg_String_b9412f8799faab3e = function (t, a) {
                const i = oe(String(o(a)), T.__wbindgen_malloc, T.__wbindgen_realloc)
                    , s = O;
                C()[t / 4 + 1] = s,
                    C()[t / 4 + 0] = i
            }
            ,
            e.wbg.__wbg_get_44be0491f933a435 = function (t, a) {
                return f(o(t)[a >>> 0])
            }
            ,
            e.wbg.__wbg_length_fff51ee6522a1a18 = function (t) {
                return o(t).length
            }
            ,
            e.wbg.__wbindgen_is_function = function (t) {
                return typeof o(t) == "function"
            }
            ,
            e.wbg.__wbg_next_526fc47e980da008 = function (t) {
                return f(o(t).next)
            }
            ,
            e.wbg.__wbg_next_ddb3312ca1c4e32a = function () {
                return ge(function (t) {
                    return f(o(t).next())
                }, arguments)
            }
            ,
            e.wbg.__wbg_done_5c1f01fb660d73b5 = function (t) {
                return o(t).done
            }
            ,
            e.wbg.__wbg_value_1695675138684bd5 = function (t) {
                return f(o(t).value)
            }
            ,
            e.wbg.__wbg_iterator_97f0c81209c6c35a = function () {
                return f(Symbol.iterator)
            }
            ,
            e.wbg.__wbg_get_97b561fb56f034b5 = function () {
                return ge(function (t, a) {
                    return f(Reflect.get(o(t), o(a)))
                }, arguments)
            }
            ,
            e.wbg.__wbg_call_cb65541d95d71282 = function () {
                return ge(function (t, a) {
                    return f(o(t).call(o(a)))
                }, arguments)
            }
            ,
            e.wbg.__wbg_isArray_4c24b343cb13cfb1 = function (t) {
                return Array.isArray(o(t))
            }
            ,
            e.wbg.__wbg_instanceof_ArrayBuffer_39ac22089b74fddb = function (t) {
                let a;
                try {
                    a = o(t) instanceof ArrayBuffer
                } catch (i) {
                    a = !1
                }
                return a
            }
            ,
            e.wbg.__wbg_instanceof_Map_41f4584cbc3ce79f = function (t) {
                let a;
                try {
                    a = o(t) instanceof Map
                } catch (i) {
                    a = !1
                }
                return a
            }
            ,
            e.wbg.__wbg_isSafeInteger_bb8e18dd21c97288 = function (t) {
                return Number.isSafeInteger(o(t))
            }
            ,
            e.wbg.__wbg_entries_e51f29c7bba0c054 = function (t) {
                return f(Object.entries(o(t)))
            }
            ,
            e.wbg.__wbg_buffer_085ec1f694018c4f = function (t) {
                return f(o(t).buffer)
            }
            ,
            e.wbg.__wbg_new_8125e318e6245eed = function (t) {
                return f(new Uint8Array(o(t)))
            }
            ,
            e.wbg.__wbg_set_5cf90238115182c3 = function (t, a, i) {
                o(t).set(o(a), i >>> 0)
            }
            ,
            e.wbg.__wbg_length_72e2208bbc0efc61 = function (t) {
                return o(t).length
            }
            ,
            e.wbg.__wbg_instanceof_Uint8Array_d8d9cb2b8e8ac1d4 = function (t) {
                let a;
                try {
                    a = o(t) instanceof Uint8Array
                } catch (i) {
                    a = !1
                }
                return a
            }
            ,
            e.wbg.__wbindgen_bigint_get_as_i64 = function (t, a) {
                const i = o(a)
                    , s = typeof i == "bigint" ? i : void 0;
                (J !== null && J.byteLength !== 0 || (J = new BigInt64Array(T.memory.buffer)),
                    J)[t / 8 + 1] = H(s) ? BigInt(0) : s,
                    C()[t / 4 + 0] = !H(s)
            }
            ,
            e.wbg.__wbindgen_debug_string = function (t, a) {
                const i = oe(ce(o(a)), T.__wbindgen_malloc, T.__wbindgen_realloc)
                    , s = O;
                C()[t / 4 + 1] = s,
                    C()[t / 4 + 0] = i
            }
            ,
            e.wbg.__wbindgen_throw = function (t, a) {
                throw new Error($(t, a))
            }
            ,
            e.wbg.__wbindgen_memory = function () {
                return f(T.memory)
            }
            ,
            e
    }
    async function lt(e) {
        if (T !== void 0)
            return T;
        e === void 0 && (e = new URL("https://static-cpn.hotkidclub.com/cpn/2025year/assets/campaign_bg-9d108286.wasm", self.location));
        const t = Et();
        (typeof e == "string" || typeof Request == "function" && e instanceof Request || typeof URL == "function" && e instanceof URL) && (e = $task.fetch(e));
        const { instance: a, module: i } = await async function (s, A) {
            if (typeof Response == "function" && s instanceof Response) {
                if (typeof WebAssembly.instantiateStreaming == "function")
                    try {
                        return await WebAssembly.instantiateStreaming(s, A)
                    } catch (n) {
                        if (s.headers.get("Content-Type") == "application/wasm")
                            throw n;
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n)
                    }
                const r = await s.arrayBuffer();
                return await WebAssembly.instantiate(r, A)
            }
            {
                const r = await WebAssembly.instantiate(s, A);
                return r instanceof WebAssembly.Instance ? {
                    instance: r,
                    module: s
                } : r
            }
        }(await e, t);
        return function (s, A) {
            return T = s.exports,
                lt.__wbindgen_wasm_module = A,
                J = null,
                K = null,
                q = null,
                L = null,
                T
        }(a, i)
    }
    const Mt = await $task.fetch("https://static-cpn.hotkidclub.com/cpn/2025year/assets/campaign_bg-9d108286.wasm").then(e => e.arrayBuffer());
    await lt(Mt);
    const s = pt(t);
    // console.log(s)
    return s

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
    pa(json_data).then((timestamp) => {
        headers["Timestamp"] = timestamp.replace(/\n/g, "").replace(/\s/g, "");
    });

    try {
        const response = await fetchRequest("POST", "https://www.hotkidclub.com/api/cpn/year2025/grabGameGetFragment.ctrl", headers, null, json_data);
        const code = response.Response.code;
        if (code === 10001) {
            console.log(`${taskName}：完成`);
            goodsMsg += `${taskName}：完成\n`;
        } else {
            console.log(`${taskName}：${response.Response.sub_msg}`);
            goodsMsg += `${taskName}：${response.Response.sub_msg}\n`;
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
        const response = await fetchRequest('POST', url, headers, null, data);
        const code = response.Response.code;
        if (code === 10001) {
            console.log(`奖池抽奖：${response.Response.data.drawInfoList[0].drawInfoList}`);
            goodsMsg += `奖池抽奖：${response.Response.data.drawInfoList[0].drawInfoList}\n`;
        } else {
            console.log(`奖池抽奖：${response.Response.sub_msg}`);
            goodsMsg += `奖池抽奖：${response.Response.sub_msg}\n`;
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
        const response = await fetchRequest('POST', url, headers, null, data)
        const code = response.Response.code;

        if (code === 10001) {
            console.log('每日签到：完成');
            goodsMsg += `每日签到：完成\n`;
        } else {
            console.log(`每日签到：${response.Response.sub_msg}`);
            goodsMsg += `每日签到：${response.Response.sub_msg}\n`;
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
        'Has-Sess': 'TRUE',
        'Accept-Encoding': 'gzip,compress,br,deflate',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.51(0x1800332e) NetType/4G Language/zh_CN',
        'Referer': 'https://servicewechat.com/wxe2c4192bf307ccff/311/page-frame.html',
        "Cookie": cookie
    };
    const params = {
        adid: 'hkc_mp-campaign_self-click-link-cV'
    };

    try {
        const response = await fetchRequest('GET', url, headers, params); // 直接等待 fetchRequest 的结果
        const code = response.Response.code; // 使用解析后的数据
        if (code === 10001) {
            console.log('每日签到：完成');
            goodsMsg += `每日签到：完成\n`;
        } else {
            console.log(`每日签到：${response.Response.sub_msg}`);
            goodsMsg += `每日签到：${response.Response.sub_msg}\n`;
        }
    } catch (error) {
        console.error("签到请求出错：", error);
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
    pa(json_data).then((timestamp) => {
        headers["Timestamp"] = timestamp.replace(/\n/g, "").replace(/\s/g, "");
    });
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
    const response = await fetchRequest('GET', url, headers,null,null);
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
                        const grade = await startGame(cookie);
                        console.log(`第${i}轮游戏中,等待150秒`);
                        goodsMsg += `第${i}轮游戏中,等待150秒\n`;
                        await sleep(150 * 1000);
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

// 脚本执行入口
!(async () => {
    if (typeof $request !== `undefined`) {
        GetCookie();
    } else {
        const apitokens = $prefs.valueForKey("wangwang");
        if (!apitokens) {
            $notify("错误", "", "没有配置 wangwang 环境变量");
            $done();
        } else {
            const apitokenList = apitokens.split("#");
            for (const apitoken of apitokenList) {
                await run(apitoken, 2);
            }
            $notify("旺旺执行结果", ``, `详情：\n${goodsMsg}`);
            $done();
        }
    }
})()
    .catch((e) => $.messages.push(e.message || e) && $.logErr(e))


// prettier-ignore
function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, a) => { s.call(this, t, (t, s, r) => { t ? a(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.encoding = "utf-8", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } getEnv() { return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0 } isNode() { return "Node.js" === this.getEnv() } isQuanX() { return "Quantumult X" === this.getEnv() } isSurge() { return "Surge" === this.getEnv() } isLoon() { return "Loon" === this.getEnv() } isShadowrocket() { return "Shadowrocket" === this.getEnv() } isStash() { return "Stash" === this.getEnv() } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const a = this.getdata(t); if (a) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, a) => e(a)) }) } runScript(t, e) { return new Promise(s => { let a = this.getdata("@chavy_boxjs_userCfgs.httpapi"); a = a ? a.replace(/\n/g, "").trim() : a; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [i, o] = a.split("@"), n = { url: `http://${o}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": i, Accept: "*/*" }, timeout: r }; this.post(n, (t, e, a) => s(a)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), a = !s && this.fs.existsSync(e); if (!s && !a) return {}; { const a = s ? t : e; try { return JSON.parse(this.fs.readFileSync(a)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), a = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : a ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const a = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of a) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, a) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[a + 1]) >> 0 == +e[a + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, a] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, a, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, a, r] = /^@(.*?)\.(.*?)$/.exec(e), i = this.getval(a), o = a ? "null" === i ? null : i || "{}" : "{}"; try { const e = JSON.parse(o); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), a) } catch (e) { const i = {}; this.lodash_set(i, r, t), s = this.setval(JSON.stringify(i), a) } } else s = this.setval(t, e); return s } getval(t) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.read(t); case "Quantumult X": return $prefs.valueForKey(t); case "Node.js": return this.data = this.loaddata(), this.data[t]; default: return this.data && this.data[t] || null } } setval(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": return $persistentStore.write(t, e); case "Quantumult X": return $prefs.setValueForKey(t, e); case "Node.js": return this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0; default: return this.data && this.data[e] || null } } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, a) => { !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, a) }); break; case "Quantumult X": this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: a, headers: r, body: i, bodyBytes: o } = t; e(null, { status: s, statusCode: a, headers: r, body: i, bodyBytes: o }, i, o) }, t => e(t && t.error || "UndefinedError")); break; case "Node.js": let s = require("iconv-lite"); this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: a, statusCode: r, headers: i, rawBody: o } = t, n = s.decode(o, this.encoding); e(null, { status: a, statusCode: r, headers: i, rawBody: o, body: n }, n) }, t => { const { message: a, response: r } = t; e(a, r, r && s.decode(r.rawBody, this.encoding)) }) } } post(t, e = (() => { })) { const s = t.method ? t.method.toLocaleLowerCase() : "post"; switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient[s](t, (t, s, a) => { !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode), e(t, s, a) }); break; case "Quantumult X": t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: a, headers: r, body: i, bodyBytes: o } = t; e(null, { status: s, statusCode: a, headers: r, body: i, bodyBytes: o }, i, o) }, t => e(t && t.error || "UndefinedError")); break; case "Node.js": let a = require("iconv-lite"); this.initGotEnv(t); const { url: r, ...i } = t; this.got[s](r, i).then(t => { const { statusCode: s, statusCode: r, headers: i, rawBody: o } = t, n = a.decode(o, this.encoding); e(null, { status: s, statusCode: r, headers: i, rawBody: o, body: n }, n) }, t => { const { message: s, response: r } = t; e(s, r, r && a.decode(r.rawBody, this.encoding)) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let a = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in a) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[e] : ("00" + a[e]).substr(("" + a[e]).length))); return t } queryStr(t) { let e = ""; for (const s in t) { let a = t[s]; null != a && "" !== a && ("object" == typeof a && (a = JSON.stringify(a)), e += `${s}=${a}&`) } return e = e.substring(0, e.length - 1), e } msg(e = t, s = "", a = "", r) { const i = t => { switch (typeof t) { case void 0: return t; case "string": switch (this.getEnv()) { case "Surge": case "Stash": default: return { url: t }; case "Loon": case "Shadowrocket": return t; case "Quantumult X": return { "open-url": t }; case "Node.js": return }case "object": switch (this.getEnv()) { case "Surge": case "Stash": case "Shadowrocket": default: { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } case "Loon": { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } case "Quantumult X": { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl, a = t["update-pasteboard"] || t.updatePasteboard; return { "open-url": e, "media-url": s, "update-pasteboard": a } } case "Node.js": return }default: return } }; if (!this.isMute) switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": default: $notification.post(e, s, a, i(r)); break; case "Quantumult X": $notify(e, s, a, i(r)); break; case "Node.js": }if (!this.isMuteLog) { let t = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; t.push(e), s && t.push(s), a && t.push(a), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { switch (this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t); break; case "Node.js": this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) } } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; switch (this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), this.getEnv()) { case "Surge": case "Loon": case "Stash": case "Shadowrocket": case "Quantumult X": default: $done(t); break; case "Node.js": process.exit(1) } } }(t, e) }
