import React from 'react';

function ServiceContent({name}) {
    if (name === 'Financials') {
        return <div>
                    <p>Free up more time to think strategically and guide your organization
                        <ul>
                            <li><b>Slice and dice your data with</b> real-time, multi-dimensional reporting</li>
                            <li><b>Consolidate all your entities in minutes</b>, no more spreadsheets </li>
                            <li><b>Automate mundane accounting tasks</b> to increase your efficiency up to 90%</li>
                            <li><b>Free your teams to focus on higher value work</b> with AI-powered solutions</li>
                        </ul>  
                    </p>
                    <a href="" className='green'>Learn about Core Financials</a>
                </div>
            
    } else if (name === 'Planning') {
        return <div>
                <p>Enable your organization to budget, plan, and quickly adapt to ever-changing conditions
                    <ul>
                        <li><b>Plan using live financial data</b> via our native, bi-directional connector</li>
                        <li><b>Get up and running in days</b> on an intuitive solution, built for finance users</li>
                        <li><b>Monitor performance in real-time</b> with interactive reports and dashboards</li>
                        <li><b>Reforecast your business in days</b> with powerful what-if scenario modeling</li>
                    </ul>  
                </p>
                <a href="" className='green'>Learn about Planning</a>
        </div>
    } else if (name === 'Analytics') {
        return <div>
                <p>Get instant, predictive insights to make data-driven decisions
                    <ul>
                        <li><b>Plug-and-play, native analytics</b> that use live financial and statistical data</li>
                        <li><b>Choose from over 200 prebuilt visuals</b>, edit them, or create your own</li>
                        <li><b>Transform your decision-making</b> using dimensional, predictive analytics</li>
                        <li><b>Build new visuals and dashboards in minutes</b> to explore data on the fly</li>
                    </ul>  
                </p>
                <a href="" className='green'>Learn about Interactive Visual Explorer</a>
        </div>
    } else if (name === 'HR & Payroll') {
        return <div>
            <p>Empower your organization to take care of your greatest asset, your people
                <ul>
                    <li><b>SGet instant visibility into your people data</b> for your local or global workforce</li>
                    <li><b>Run payroll in a few simple steps</b> with the leading mid-market payroll solution</li>
                    <li><b>Sync employee data to Sage Intacct in real-time,</b> no duplicate data entry</li>
                    <li><b>Use your dimensions to streamline posting and reporting</b> for payroll journal entries</li>
                </ul>  
            </p>
            <a href="" className='green'>Learn about HR & People Management</a>
        </div>
    } else {
        return null
    }
}
export default ServiceContent;