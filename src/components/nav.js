import React from 'react';
import './nav.css'

function Nav () {
    return (
        <div className='header'>
            <nav class="pa2 pa2-ns top w-100">
                <a class="link dim white b f6 f5-ns dib mr3 w-100" href="#" title="signup">Watch a short interactive demo and live Q&A – Sign up now →</a>
                <div className='w-20 navright mr3'>
                    <a class="link dim white f6 f5-ns dib mr3" href="#" title="contact">Contact</a>
                    <a class="link dim white f6 f5-ns dib" href="#" title="signin">Sign In</a>
                </div>
            </nav>
            <nav class="dt w-100 border-box pa3 ph5-ns mr2">
                <a class="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
                    <img src="https://www.sageintacct.com/sites/default/files/sage-intacct-logo.svg" class="w-40 h-40" alt="Accounting and Financial Management Services" />
                </a>
                <div class="dtc v-mid w-75 tr">
                {/* make these as dropdowns */}

                    <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Products">Products</a>
                    <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Industries">Industries</a>
                    <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Services">Services</a>
                    <a class="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Partners">Partners</a>
                    <a class="link dim dark-gray f6 f5-ns dib" href="#" title="Resources">Resources</a>
                    <a class="f6 link dim br1 ph3 pv2 mb2 dib white bg-green btn" href="#0">Get Pricing</a>
                </div>
                </nav>
        </div>
    )
}
 
export default Nav;

