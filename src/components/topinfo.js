import React from 'react';
import './topinfo.css'

function TopInfo () {
    return (
        <div className='w-80 center main-div shadow-2 pa5 bg-white '>
            <div class="dt-ns dt--fixed-ns">
                <div class="dtc-ns tl pv4">
                    <h5>See Sage Intacct in action</h5>
                    <p>Learn what Sage Intacct can offer you with a live demo followed by Q&A.</p>
                    <a href="" className='green mt'>Sign up now!</a>
                </div>
                <div class="dtc-ns tl pv4">
                    <h5>#1 for the 5th year in a row</h5>
                    <p>Once again, Sage Intacct received the highest product score in core financials for the lower midsize enterprises use case from Gartner1.</p>
                    <a href="" className='green mt2'>Read report</a>
                </div>
                <div class="dtc-ns tl pv4">
                    <h5>Outgrowing QuickBooks?</h5>
                    <p>Find out why thriving organizations say goodbye to QuickBooks and partner with Sage Intacct to power their growth.</p>
                    <a href="" className='green mt2'>Learn why?</a>
                </div>
            </div>
        </div>
    )
}
 
export default TopInfo;