(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[394], {
    35883: function() {},
    38251: function(e, s, t) {
        "use strict";
        t.r(s),
        t.d(s, {
            SettingContext: function() {
                return A
            },
            config: function() {
                return T
            },
            default: function() {
                return P
            }
        });
        var l = t(9268)
          , a = t(27415)
          , n = t.n(a)
          , r = t(34298)
          , i = t(54306)
          , c = t(19707)
          , d = t(60260)
          , o = t(59140)
          , x = t(15349)
          , m = t(22430)
          , p = t(56008)
          , f = t(35846)
          , h = t.n(f)
          , u = t(76394)
          , j = t.n(u)
          , b = t(86006)
          , N = t(82567)
          , g = t(71986)
          , v = t(89105);
        let {ethAddress: k, spinaqAddress: w} = g.k;
        function y() {
            let {arbPrice: e, ethPrice: s} = (0,
            b.useContext)(A)
              , [t] = (0,
            N.k)({
                token0: k,
                token1: w
            })
              , [a,n] = (0,
            b.useState)(0);
            return (0,
            b.useEffect)(()=>{
                if (t) {
                    let[e,l] = t.reserves
                      , a = t.token0.toLowerCase() === k.toLowerCase() ? e : l
                      , r = t.token0.toLowerCase() === k.toLowerCase() ? l : e
                      , i = Number((0,
                    v.bM)(a, 18)) / Number((0,
                    v.bM)(r, 18)) * s;
                    n(i)
                }
            }
            , [t]),
            (0,
            l.jsx)("nav", {
                className: " w-full text-black z-50 px-3",
                children: (0,
                l.jsxs)("div", {
                    className: "grid grid-cols-3",
                    children: [(0,
                    l.jsx)("div", {
                        className: "flex items-center",
                        children: (0,
                        l.jsx)("div", {
                            className: "flex items-center pl-5",
                            children: (0,
                            l.jsx)(h(), {
                                href: "/",
                                className: "flex items-center hover:cursor-pointer",
                                children: (0,
                                l.jsx)(j(), {
                                    src: "/logo.svg",
                                    width: "120",
                                    height: "120",
                                    alt: "SpinaqDex logo"
                                })
                            })
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "flex items-center justify-center",
                        children: (0,
                        l.jsx)("div", {
                            className: "hidden lg:block",
                            children: (0,
                            l.jsxs)("div", {
                                className: "flex items-center justify-center space-x-4 text-2xl font-semibold",
                                children: [(0,
                                l.jsx)(h(), {
                                    href: "/swap",
                                    className: "flex items-center px-4",
                                    children: "Swap"
                                }), (0,
                                l.jsx)(h(), {
                                    href: "/pools",
                                    className: "flex items-center px-4",
                                    children: "Pools"
                                }), (0,
                                l.jsx)(h(), {
                                    href: "/farms",
                                    className: "flex items-center px-4",
                                    children: "Farms"
                                })]
                            })
                        })
                    }), (0,
                    l.jsx)("div", {
                        className: "flex items-center justify-end",
                        children: (0,
                        l.jsxs)("div", {
                            className: "flex justify-between items-center space-x-3",
                            children: [(0,
                            l.jsxs)("div", {
                                className: "items-center hidden lg:flex",
                                children: [(0,
                                l.jsx)(j(), {
                                    src: "/spinaq_logo.png",
                                    height: 45,
                                    width: 45,
                                    alt: "Spinaq logo"
                                }), (0,
                                l.jsxs)("span", {
                                    className: "ml-2",
                                    children: ["$", a.toFixed(6)]
                                })]
                            }), (0,
                            l.jsxs)("div", {
                                className: "items-center hidden lg:flex",
                                children: [(0,
                                l.jsx)(j(), {
                                    src: "/arb_logo.png",
                                    height: 45,
                                    width: 45,
                                    alt: "arbitrum logo"
                                }), (0,
                                l.jsxs)("span", {
                                    className: "ml-2",
                                    children: ["$", e.toFixed(2)]
                                })]
                            }), (0,
                            l.jsx)("div", {
                                className: "flex space-x-3 items-center",
                                children: (0,
                                l.jsx)(o.x3.Custom, {
                                    children: e=>{
                                        let {isConnected: s, isConnecting: t, show: a, hide: n, address: r, ensName: i, chain: c} = e
                                          , d = "".concat(null == r ? void 0 : r.substring(0, 5), "••••").concat(null == r ? void 0 : r.substring(r.length - 4, r.length));
                                        return (0,
                                        l.jsx)("button", {
                                            onClick: a,
                                            className: "connect-button-color text-white px-4 md:px-10 py-2 rounded-lg cursor-pointer",
                                            children: s ? d : "Connect wallet"
                                        })
                                    }
                                })
                            })]
                        })
                    })]
                })
            })
        }
        var S = t(81817)
          , _ = t(84537);
        function E() {
            return (0,
            l.jsx)("div", {
                className: "flex flex-col w-full items-end bg-white footer-box mt-[150px] text-sm ",
                children: (0,
                l.jsxs)("footer", {
                    className: "flex flex-col text-black z-50 w-full",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "flex justify-between items-center px-4 pt-3",
                        children: [(0,
                        l.jsxs)("div", {
                            className: "flex justify-between py-2",
                            children: [(0,
                            l.jsx)("span", {
                                className: "flex px-2 items-center bg-black rounded-full text-white",
                                children: (0,
                                l.jsx)(h(), {
                                    href: "https://spinaqdex.gitbook.io/spinaqdex/",
                                    target: "_blank",
                                    children: (0,
                                    l.jsx)(_.ZcO, {
                                        className: "w-[1rem] h-[1rem]"
                                    })
                                })
                            }), (0,
                            l.jsx)("span", {
                                className: "flex items-center text-white  text-4xl rounded-full bg-black ml-2",
                                children: (0,
                                l.jsx)(h(), {
                                    href: "https://twitter.com/SpinaqDex",
                                    target: "_blank",
                                    className: "flex items-center px-2 text-2xl",
                                    children: (0,
                                    l.jsx)(S.LCd, {
                                        className: "w-[1rem] h-[1rem]"
                                    })
                                })
                            }), (0,
                            l.jsx)("span", {
                                className: "px-2",
                                children: (0,
                                l.jsx)(h(), {
                                    href: "https://t.me/SpinaqDex",
                                    target: "_blank",
                                    children: (0,
                                    l.jsx)(S.Ww5, {
                                        className: "w-[2rem] h-[2rem]"
                                    })
                                })
                            })]
                        }), (0,
                        l.jsx)("span", {
                            children: "E-mail: spinaqdexxyz@proton.me"
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex flex-col space-y-2 mt-2 mb-[-5px] text-sm",
                            children: [(0,
                            l.jsx)(h(), {
                                href: "/terms",
                                className: "cursor-pointer",
                                children: "Terms of Service"
                            }), (0,
                            l.jsx)(h(), {
                                href: "/privacy-policy",
                                className: "cursor-pointer",
                                children: "Privacy Policy"
                            })]
                        }), (0,
                        l.jsxs)("div", {
                            className: "flex flex-col space-y-2 text-sm",
                            children: [(0,
                            l.jsxs)(h(), {
                                href: "https://arbiscan.io/address/0x802124EB78E43FD8d3d4E6DAAAa4Be28Dc7993dc",
                                children: ["Token Address:", " ", (0,
                                l.jsx)("span", {
                                    className: "underline font-semibold",
                                    children: "0x802124EB78E43FD8d3d4E6DAAAa4Be28Dc7993dc"
                                })]
                            }), (0,
                            l.jsx)("span", {
                                children: "TAX: 2%/2%"
                            })]
                        })]
                    }), (0,
                    l.jsxs)("div", {
                        className: "flex justify-between items-center px-4 py-3",
                        children: [(0,
                        l.jsxs)("span", {
                            className: "text-sm sm:text-left",
                            children: ["\xa9 2023", " ", (0,
                            l.jsx)(h(), {
                                href: "/",
                                className: "hover:underline",
                                children: "Spinaq Dex"
                            }), ". All Rights Reserved."]
                        }), (0,
                        l.jsx)("div", {
                            className: "text-sm text-right",
                            children: "Spinaq Dex is developed and managed independently of the Arbitrum team"
                        })]
                    })]
                })
            })
        }
        t(54121);
        let {chains: C, publicClient: D, webSocketPublicClient: q} = (0,
        i.QB)([d.y], [(0,
        m.G)({
            apiKey: "OdTsmi_EI_f2qkriXyF_5LPH6GxfUp0g"
        }), (0,
        x.R)({
            rpc: e=>({
                http: "https://arb-mainnet.g.alchemy.com/v2/-eNZhqTYj6RAjiZxnMNA0g9b2IpvG1rI"
            })
        })])
          , T = (0,
        c._g)((0,
        o._K)({
            autoConnect: !0,
            chains: C,
            alchemyId: "OdTsmi_EI_f2qkriXyF_5LPH6GxfUp0g",
            walletConnectProjectId: "391018c7c67efb157707036ef812564f",
            appName: "SpinaqDex",
            publicClient: D,
            webSocketPublicClient: q,
            appUrl: "",
            appIcon: "",
            appDescription: "Spinaq dex"
        }))
          , A = (0,
        b.createContext)({
            slippage: 4,
            deadline: 20,
            arbPrice: 1,
            ethPrice: 2230,
            setDeadline: ()=>{}
            ,
            setSlippage: ()=>{}
        });
        function P(e) {
            let {children: s} = e
              , [t,a] = (0,
            b.useState)(4)
              , [i,d] = (0,
            b.useState)(20)
              , [x,m] = (0,
            b.useState)(0)
              , [f,h] = (0,
            b.useState)(0)
              , [u,j] = (0,
            b.useState)("swap-img")
              , N = (0,
            p.usePathname)();
            return (0,
            b.useEffect)(()=>{
                fetch("https://api.geckoterminal.com/api/v2/simple/networks/arbitrum/token_price/0x82aF49447D8a07e3bd95BD0d56f35241523fBab1,0x912CE59144191C1204E64559FE8253a0e49E6548", {
                    next: {
                        revalidate: 60
                    }
                }).then(e=>e.json()).then(e=>{
                    let {data: {attributes: s}} = e
                      , t = s.token_prices["0x912ce59144191c1204e64559fe8253a0e49e6548"]
                      , l = s.token_prices["0x82af49447d8a07e3bd95bd0d56f35241523fbab1"];
                    m(Number(l)),
                    h(Number(t))
                }
                ).catch(e=>console.log(e))
            }
            , []),
            (0,
            b.useEffect)(()=>{
                "/swap" === N && j("swap-img"),
                ("/pools" === N || N.includes("/pools")) && j("pool-img"),
                "/farms" === N && j("farm-img")
            }
            , [N]),
            (0,
            l.jsx)("html", {
                lang: "en",
                children: (0,
                l.jsx)(A.Provider, {
                    value: {
                        slippage: t,
                        setSlippage: a,
                        deadline: i,
                        setDeadline: d,
                        arbPrice: f,
                        ethPrice: x
                    },
                    children: (0,
                    l.jsx)(c.eM, {
                        config: T,
                        children: (0,
                        l.jsx)(o.bO, {
                            mode: "dark",
                            customTheme: {
                                "--ck-accent-color": "#00D54B",
                                "--ck-accent-text-color": "#ffffff"
                            },
                            children: (0,
                            l.jsxs)("body", {
                                className: "".concat(n().className, " bg-white"),
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "relative flex flex-col justify-between text-basic items-center min-h-screen ".concat(u),
                                    children: [(0,
                                    l.jsx)(y, {}), s, (0,
                                    l.jsx)(E, {})]
                                }), (0,
                                l.jsx)(r.c, {})]
                            })
                        })
                    })
                })
            })
        }
    },
    82567: function(e, s, t) {
        "use strict";
        t.d(s, {
            k: function() {
                return m
            }
        });
        var l = t(71986)
          , a = t(86006)
          , n = t(9770)
          , r = t(46364)
          , i = t(54306);
        let {ethAddress: c, routerAddress: d, factoryAddress: o} = l.k
          , x = async e=>{
            let {token0: s, token1: t, account: l} = e
              , a = (0,
            i.uN)({
                address: o,
                abi: n.Mt
            });
            if (s && t) {
                let e = await a.read.getPair([s, t]);
                if ("0x0000000000000000000000000000000000000000" === e)
                    return null;
                {
                    let s = (0,
                    i.uN)({
                        address: e,
                        abi: r.Mt
                    })
                      , [t,a,n,c] = await Promise.all([s.read.token0(), s.read.token1(), s.read.getReserves(), s.read.totalSupply()]);
                    if (l) {
                        let e = await s.read.balanceOf([l]);
                        return {
                            pairToken0: t,
                            pairToken1: a,
                            reserves: n,
                            totalSupply: c,
                            pairBalance: e
                        }
                    }
                    return {
                        pairToken0: t,
                        pairToken1: a,
                        reserves: n,
                        totalSupply: c
                    }
                }
            }
        }
          , m = e=>{
            let {token0: s, token1: t, account: l} = e
              , [n,r] = (0,
            a.useState)(!0)
              , [i,c] = (0,
            a.useState)(null);
            return (0,
            a.useEffect)(()=>{
                s && t && (r(!0),
                x(e).then(e=>{
                    null === e ? c(null) : (c({
                        token0: null == e ? void 0 : e.pairToken0,
                        token1: null == e ? void 0 : e.pairToken1,
                        reserves: null == e ? void 0 : e.reserves,
                        totalSupply: null == e ? void 0 : e.totalSupply,
                        pairBalance: null == e ? void 0 : e.pairBalance
                    }),
                    r(!1))
                }
                ))
            }
            , [s, t, l]),
            [i, n]
        }
    },
    54121: function() {}
}]);
