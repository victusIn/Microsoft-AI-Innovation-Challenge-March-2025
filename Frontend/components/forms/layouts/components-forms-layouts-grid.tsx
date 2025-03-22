import React from 'react';

const ComponentsFormsLayoutsGrid = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-gray-100 p-6">
            <form className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl space-y-5">
                
                <h2 className="text-3xl font-bold text-center text-gray-700">Permit Fee Payment</h2>

                <div>
                    <label htmlFor="organisation" className="block font-medium">Organisation Name</label>
                    <input id="organisation" type="text" placeholder="Enter Company Name" className="form-input w-full" />
                </div>

                <div>
                    <label htmlFor="licenseType" className="block font-medium">License Type</label>
                    <input id="licenseType" type="text" placeholder="Enter License Type" className="form-input w-full" />
                </div>

                <div>
                    <label htmlFor="amountDue" className="block font-medium">Amount Due</label>
                    <input id="amountDue" type="text" placeholder="Enter Amount" className="form-input w-full" />
                </div>

                <div>
                    <label htmlFor="dueDate" className="block font-medium">Due Date</label>
                    <input id="dueDate" type="date" className="form-input w-full" />
                </div>

                <div>
                    <label htmlFor="paymentMethod" className="block font-medium">Payment Method</label>
                    <select id="paymentMethod" className="form-select w-full text-gray-700">
                        <option>Choose...</option>
                        <option>Credit Card</option>
                        <option>Bank Transfer</option>
                        <option>PayPal</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="amountPaid" className="block font-medium">Amount Paid</label>
                    <input id="amountPaid" type="text" placeholder="Enter Amount Paid" className="form-input w-full" />
                </div>

                <div>
                    <label htmlFor="paymentDetails" className="block font-medium">Payment Details</label>
                    <textarea id="paymentDetails" placeholder="Enter Payment Details" className="form-input w-full h-24"></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ComponentsFormsLayoutsGrid;
