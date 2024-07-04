"use client"
import React, { useState } from 'react';

export const SidebarPage = () => {

    const [isOpenSidebar, setIsSidebar] = useState(false);

    const toggleSidebar = () => {
        setIsSidebar(!isOpenSidebar);
    };

    return (
        <div className={`flex flex-col items-center p-5 gap-5  ${isOpenSidebar ? 'w-40' : 'w-30'}`}>
            <div>
                <button className="" onClick={toggleSidebar}>
                    OPEN
                </button>
            </div>

            {isOpenSidebar &&
                <div className="flex-col flex gap-5 bg-black">
                    <div>
                        1
                    </div>
                    <div>
                        1
                    </div>
                    <div>
                        1
                    </div>
                </div>
            }

            {!isOpenSidebar &&
                <div className="flex-col flex gap-5 bg-black">
                    <div>
                        2
                    </div>
                    <div>
                        1
                    </div>
                    <div>
                        1
                    </div>
                </div>
            }

        </div>
    );
};
