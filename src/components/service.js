import React from 'react';
import ServiceContent from './servicecontent';

function Service ( props ) {
    const {selcName, selectedService} = props;
    return (
        <div className='w-80 center pt6'>
            <h1 className='center w-80 tc'><b>Thrive in today's ever-changing, digital world </b>with connected solutions that simply work</h1>
            <div className="container">
                <div className="mw9 center ph3-ns">
                    <div className="cf ph2-ns">
                        <div className="fl h-100 w-100 w-50-ns pa2 outline">
                            <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-near-black" href="" onClick={(e) => selcName(e.target.innerText)}>Financials</a>
                            <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-near-black" href="" onClick={(e) => selcName(e.target.innerText)}>Planning</a>
                            <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-gray" href="" onClick={(e) => selcName(e.target.innerText)}>Analytics</a>
                            <a class="f6 link dim br3 ph3 pv2 mb2 dib white bg-mid-gray" href="" onClick={(e) => selcName(e.target.innerText)}>HR & Payroll</a>
                        <div className="bg-white pv4"></div>
                        </div>
                        <div className="fl w-100 w-50-ns pa2">
                            <div className="bg-white pv4">
                                <div>
                                    <h3 onClick={(e) => selcName(e.target.innerText)}>Financials</h3>
                                    { selectedService === 'Financials' ? <ServiceContent name={selectedService} /> : null}
                                </div>
                                <div>
                                    <h3 onClick={(e) => selcName(e.target.innerText)}>Planning</h3>
                                    { selectedService === 'Planning' ? <ServiceContent name={selectedService} /> : null}

                                </div>
                                <div>
                                    <h3 onClick={(e) => selcName(e.target.innerText)}>Analytics</h3>
                                    { selectedService === 'Analytics' ? <ServiceContent name={selectedService} /> : null}

                                </div>
                                <div>
                                    <h3 onClick={(e) => selcName(e.target.innerText)}>HR & Payroll</h3>
                                    { selectedService === 'HR & Payroll' ? <ServiceContent name={selectedService} /> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Service;
