import React from 'react';

function SolutionContent({name}) {
    if (name === 'Healthcare') {
        return <div>
        <h3>Healthcare</h3>
        <p>Sage Intacct is the choice of growing, data driven healthcare organizations. Our cloud-based accounting solution is the only accounting software endorsed by the AICPA and designated as Peer</p> 
        <a href="" className='green'>Healthcare industry</a>
        <img src='https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-healthcare.png?itok=1YhNWrAo'/>
    </div>
            
    } else if (name === 'Construction and Real Estate') {
        return <div>
        <h3>Construction and Real Estate</h3>
        <p>Sage Intacct Construction is a native cloud solution that enables proactive job cost management with critical financial and operational metrics that drive increased efficiency, reduced audit time, and improve</p> 
        <a href="" className='green'>Construction and Real Estate industry</a>
        <img src='https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-any-industry.png?itok=o2aG6oOu'/>
    </div>
    } else if (name === 'Financial Services') {
        return <div>
        <h3>Financial Services</h3>
        <p>The #1 accounting software provider trusted by leading firms across the financial services industry, including: wealth and asset management, real estate, insurance, lending and fintech. Learn more about Sage Intacct, the cloud financial management solution that helps financial services</p> 
        <a href="" className='green'>Financial Services industry</a>
        <img src='https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-financial-services.png?itok=s1wVQqGI'/>
    </div>
    } else if (name === 'Hospitality') {
        return <div>
        <h3>Hospitality</h3>
        <p>Best-in-class financial management for multi-property hotels, resorts, restaurants, entertainment venues, clubs, and all other hospitality industry businesses.</p> 
        <a href="" className='green'>Hospitality industry</a>
        <img src='https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-hospitality.png?itok=TuH9r7wZ'/>
    </div>
    } else if (name === 'Nonprofits') {
        return <div>
        <h3>Nonprofits</h3>
        <p>Sage Intacct Helping Nonprofits Achieve Greater Impact.</p> 
        <a href="" className='green'>Nonprofits industry</a>
        <img src='https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-non-profits.png?itok=KD4eclUN'/>
    </div>
    } else if (name === 'Professional Services') {
        return <div>
        <h3>Professional Services</h3>
        <p>Don't manage projects using the rear-view mirror. Sage Intacct delivers operational and financial visibility for your entire business—not just finance— for improved automation, profitability and customer</p> 
        <a href="" className='green'>Professional Services industry</a>
        <img src='https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-professional-services.png?itok=wD8WXM73'/>
    </div>
    } else if (name === 'Subscription and SaaS') {
        return <div>
        <h3>Subscription and SaaS</h3>
        <p>The #1 Subscription Billing & Financial Software for SaaS Companies</p> 
        <a href="" className='green'>Subscription and SaaS industry</a>
        <img src='https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-subscription-saas.png?itok=O1Yqxqxp'/>
    </div>
    } else if (name === 'Wholesale Distribution') {
        return <div>
        <h3>Wholesale Distribution</h3>
        <p>Distributors are becoming more and more customer-centric. The trick? We're helping them stock up on better business insights to improve productivity. Built from the ground up to be the best in the industry, Sage</p> 
        <a href="" className='green'>Wholesale Distribution industry</a>
        <img src='https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-wholesale-distribution.png?itok=lGBSzLB7'/>
    </div>
    }  else {
        return <div>
        <h3>Empower your organization to take care of your greatest asset, your people</h3>
        <p>The smart cloud accounting solution to unleash the potential of your business. Learn why industry leaders choose Sage Intacct—rated #1 in customer satisfaction by G2.</p> 
        <a href="" className='green'>For any industry</a>
        <img src='https://www.sageintacct.com/sites/default/files/styles/home-industry/public/accounting-financial-management-for-any-industry.png?itok=o2aG6oOu'/>
    </div>
    }
}
export default SolutionContent;