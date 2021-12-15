import React from 'react';
import './links.css';

function Links () {
    return (
        <div className='links'>
            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col">
                        <div class="links__link p-3 border bg-light">
                            <a href="https://dougrosenberg.com">Music page</a>
                        </div>
                        <div class="links__link p-3 border bg-light">
                            <a href="https://dougrosenberg.com">Something Cool</a>
                        </div>
                        <div class="links__link p-3 border bg-light">
                            <a href="https://dougrosenberg.com">Something Cool</a>
                        </div>
                    </div>
                    <div class="col">
                        <div class="links__link p-3 border bg-light">
                            <a href="https://gpt3.dougrosenbergdev.com">GPT3 Project</a>
                        </div>
                        <div class="links__link p-3 border bg-light">
                            <a href="https://gpt3.dougrosenbergdev.com">Something Cool</a>
                        </div>
                        <div class="links__link p-3 border bg-light">
                            <a href="https://gpt3.dougrosenbergdev.com">Something Cool</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Links;
