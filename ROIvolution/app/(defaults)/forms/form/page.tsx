import React from 'react';

const ComponentsFormsLayoutsGrid = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-gray-100 p-6">
            <form className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl space-y-5">
                
                <h2 className="text-3xl font-bold text-center text-gray-700">ROI Calculator </h2>

                <div>
                    <label htmlFor="organisation" className="block font-medium">Number of customer service agents</label>
                    <input id="organisation" type="text" placeholder="Enter Company Name" className="form-input w-full" />
                </div>

                <div>
                    <label htmlFor="licenseType" className="block font-medium">Average calls per agent per day</label>
                    <input id="licenseType" type="text" placeholder="Enter License Type" className="form-input w-full" />
                </div>

                <div>
                    <label htmlFor="amountDue" className="block font-medium">Average call duration (minutes)</label>
                    <input id="amountDue" type="text" placeholder="Enter Amount" className="form-input w-full" />
                </div>

                <div>
                    <label htmlFor="dueDate" className="block font-medium">Current cost per agent (salary, benefits, etc.)</label>
                    <input id="dueDate" type="date" className="form-input w-full" />
                </div>

               

                <div>
                    <label htmlFor="amountPaid" className="block font-medium">AI adoption percentage (how many calls AI should handle)
                    </label>
                    <input id="amountPaid" type="text" placeholder="Enter Amount Paid" className="form-input w-full" />
                </div>

                

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ComponentsFormsLayoutsGrid;
