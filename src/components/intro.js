import React from 'react';
import './intro.css';

function Intro () {
    return (
        <div className='main'>
            <section className='w-80 center pa5'>
                <article class="cf">
                    <div class="fl w-50 tc main-content">
                        <h1><b>The Leader in Accounting and Financial Management Software</b></h1>
                        <p>Whether you are a growing startup or an established public company,<br></br> we are the right partner for your long-term success.</p>
                        <a class="f6 link dim br1 ba ph3 pv2 mb2 dib green" href="#0">Watch Demo</a>
                    </div>
                    <div class="fl w-50 tc br-50 bg-white shadow-3 mr-2">
                        <img src="https://www.sageintacct.com/sites/default/files/accounting-financial-management-software-header.svg" className='w-90 h-80 pa2 '/>
                    </div>
                </article>
            </section>
        </div>
    )
}
 
export default Intro;