import React from 'react';

const HomePageHost = () => {
    return (
        <div className="min-h-screen bg-gray-100">

            <div className="flex flex-col md:flex-row gap-5 p-5">
                <div className=" text-white p-5 rounded-lg shadow-lg flex-none min-w-[350px] hover:-translate-y-2 transform transition">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold">Valorant</h3>
                            <p>S8ul_Mortal</p>
                            <p>GodLike_Akshat</p>
                            <p>S8UL_Scout</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">BGMI </h3>
                            <p></p>
                            <p>Winner 2</p>
                            <p>Winner 3</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Tournament3</h3>
                            <p>Winner 1</p>
                            <p>Winner 2</p>
                            <p>Winner 3</p>
                        </div>
                    </div>
                </div>

                <div className="flex-grow bg-white p-5 rounded-lg shadow-lg overflow-y-auto max-h-[100vh] max-w-[300px]:">
                    <div className="space-y-5">
                    <div className="post">
                            <p>@username</p>
                            <img
                                src="https://via.placeholder.com/300x200"
                                alt="Post Image"
                                className="w-full rounded-lg"
                            />
                            <p>Caption</p>
                        </div>
                        <div className="post">
                            <p>@username</p>
                            <img
                                src="https://via.placeholder.com/300x200"
                                alt="Post Image"
                                className="w-full rounded-lg"
                            />
                            <p>Caption</p>
                        </div>
                        <div className="post">
                            <p>@username</p>
                            <img
                                src="https://via.placeholder.com/300x200"
                                alt="Post Image"
                                className="w-full rounded-lg"
                            />
                            <p>Caption</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="bg-white p-5 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold">Total Matches</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageHost;