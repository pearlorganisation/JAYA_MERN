import React, { useState } from 'react';

const ChatBotForm = () => {
    const [step, setStep] = useState(0);  // Track the current step
    const [responses, setResponses] = useState({
        gender: '',
        age: '',
        state: '',
        caste: '',
        residence: '',
    });

    const handleResponseChange = (field, value) => {
        setResponses({
            ...responses,
            [field]: value,
        });
        setStep(step + 1);  // Move to the next step
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="space-y-4">
                {/* Display previous responses and the current question */}
                {(step >= 0) && (
                    <div>
                        <p className="font-semibold">Your gender?</p>
                        <div className="flex space-x-2">
                            {['Male', 'Female', 'Transgender'].map((gender) => (
                                <button
                                    key={gender}
                                    onClick={() => handleResponseChange('gender', gender)}
                                    className={`px-4 py-2 rounded ${responses.gender === gender
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gray-200'
                                        }`}
                                >
                                    {gender}
                                </button>
                            ))}
                        </div>
                        {responses.gender && (
                            <p className="mt-2 text-green-600">{responses.gender}</p>
                        )}
                    </div>
                )}

                {(step >= 1) && (
                    <div>
                        <p className="font-semibold">Your age?</p>
                        <input
                            type="number"
                            value={responses.age}
                            onChange={(e) => handleResponseChange('age', e.target.value)}
                            className="w-full p-2 mt-1 border rounded"
                            placeholder="Enter your age"
                        />
                        {responses.age && (
                            <p className="mt-2 text-green-600">{responses.age}</p>
                        )}
                    </div>
                )}

                {(step >= 2) && (
                    <div>
                        <p className="font-semibold">Your state?</p>
                        <select
                            value={responses.state}
                            onChange={(e) => handleResponseChange('state', e.target.value)}
                            className="w-full p-2 mt-1 border rounded"
                        >
                            <option value="">Select your state</option>
                            {['Tamil Nadu', 'Kerala', 'Andhra', 'Kaniyakumari'].map(
                                (state) => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                )
                            )}
                        </select>
                        {responses.state && (
                            <p className="mt-2 text-green-600">{responses.state}</p>
                        )}
                    </div>
                )}

                {(step >= 3) && (
                    <div>
                        <p className="font-semibold">You belong to...</p>
                        <div className="flex flex-wrap space-x-2 space-y-2">
                            {[
                                'General',
                                'Other backward class(OBC)',
                                'Particularly vulnerable tribal(PVTG)',
                                'Scheduled caste(SC)',
                                'Scheduled tribe(ST)',
                            ].map((caste) => (
                                <button
                                    key={caste}
                                    onClick={() => handleResponseChange('caste', caste)}
                                    className={`px-4 py-2 rounded ${responses.caste === caste
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gray-200'
                                        }`}
                                >
                                    {caste}
                                </button>
                            ))}
                        </div>
                        {responses.caste && (
                            <p className="mt-2 text-green-600">{responses.caste}</p>
                        )}
                    </div>
                )}

                {(step >= 4) && (
                    <div>
                        <p className="font-semibold">What is your residence?</p>
                        <div className="flex space-x-2">
                            {['Urban', 'Rural'].map((residence) => (
                                <button
                                    key={residence}
                                    onClick={() => handleResponseChange('residence', residence)}
                                    className={`px-4 py-2 rounded ${responses.residence === residence
                                        ? 'bg-green-500 text-white'
                                        : 'bg-gray-200'
                                        }`}
                                >
                                    {residence}
                                </button>
                            ))}
                        </div>
                        {responses.residence && (
                            <p className="mt-2 text-green-600">{responses.residence}</p>
                        )}
                    </div>
                )}

                {step >= 5 && (
                    <div className="text-center">
                        <p className="font-semibold">Thank you for your responses!</p>
                        <button
                            onClick={() => setStep(0)}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Start Over
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};








export default ChatBotForm