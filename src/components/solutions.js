import React from 'react';
import SolutionContent from './solutionContent';

function Solutions ({onSolSelection, solution}) {
    return (
        <div className='w-80 center'>
            <h1 className='w-80 center'>Solutions for your <b>industry's specific needs</b></h1>
            <div class="flex justify-center">
                <div class="outline w-50 pa3 mr2">
                    <div class="pa3 pa5-ns">
                        <ul class="list pl0 measure center">
                        {/* add hover to change color and  state to display the req. data*/}
                            <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" onClick={(e) => onSolSelection(e.target.innerText)}>For Any Industry</li>
                            <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" onClick={(e) => onSolSelection(e.target.innerText)}>Construction and Real Estate</li>
                            <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" onClick={(e) => onSolSelection(e.target.innerText)}>Financial Services</li>
                            <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" onClick={(e) => onSolSelection(e.target.innerText)}>Healthcare</li>
                            <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" onClick={(e) => onSolSelection(e.target.innerText)}>Hospitality</li>
                            <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" onClick={(e) => onSolSelection(e.target.innerText)}>Nonprofits</li>
                            <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" onClick={(e) => onSolSelection(e.target.innerText)} >Professional Services</li>
                            <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" onClick={(e) => onSolSelection(e.target.innerText)}>Subscription and SaaS</li>
                            <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30" onClick={(e) => onSolSelection(e.target.innerText)}>Wholesale Distribution</li>
                        </ul>
                    </div>

                </div>
                <div class="outline w-50 pa3 mr2">
                    <SolutionContent name={solution}/>
                </div>
            </div>
        </div>
    )
}
 
export default Solutions;
