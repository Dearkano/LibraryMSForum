﻿import * as React from 'react';

export class Footer extends React.Component<{}, {}> {   //底部
    render() {
        return <div className="footer">
            <div className="column">
                <div className="footerRow">
                    <div style={{ marginRight: "15px", color: "#000" }}>友情链接</div>
                    <a href="http://www.zju.edu.cn/">浙江大学</a>|
                    <a href="http://www.cs.zju.edu.cn/">浙江大学计算机学院</a>|
                    <a href="http://www.zju88.org/agent/index.do">飘渺水云间</a>|
                    <a href="http://www.qsc.zju.edu.cn/">求是潮</a>|
                    <a href="http://luckweb.057101.com/bt2/index.asp">缘网</a>|
                    <a href="http://www.nexushd.org/login.php">NexusHD</a>|
                    <a href="https://www.zdgd.zju.edu.cn/">浙江大学广播电视网</a>|
                    <a href="http://zy.zju.edu.cn/">浙大搜索</a></div>
                <div className="footerRow">
                    Copyright © Vayne Tian --CC98 --InCAS Lab | <a href="mailto:vaynetian@cc98.org">Email: vaynetian@cc98.org</a>
                </div>
            </div>
        </div>
    }
}