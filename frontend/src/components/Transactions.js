// src/components/Transactions.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductBarChart from './ProductBarChart'; // Make sure the import path matches

function Transactions() {
    const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem('transactions')) || []);
    const [form, setForm] = useState({ product: '', quantity: '', date: '' });
    const [editingIndex, setEditingIndex] = useState(null);

    const handleAddOrUpdate = () => {
        const updatedTransactions = [...transactions];
        if (editingIndex !== null) {
            updatedTransactions[editingIndex] = form;
        } else {
            updatedTransactions.push(form);
        }
        setTransactions(updatedTransactions);
        localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
        setForm({ product: '', quantity: '', date: '' });
        setEditingIndex(null);
    };

    const handleEdit = (index) => {
        setForm(transactions[index]);
        setEditingIndex(index);
    };

    const handleDelete = (index) => {
        const updatedTransactions = transactions.filter((_, i) => i !== index);
        setTransactions(updatedTransactions);
        localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
    };

    return (
        <div className="center-container">
            <div className="transactions">
                <h2>Transactions</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleAddOrUpdate(); }} className="form">
                    <input 
                        type="text" 
                        placeholder="Product" 
                        value={form.product} 
                        onChange={(e) => setForm({ ...form, product: e.target.value })} 
                        required 
                        className="input-field" 
                    />
                    <input 
                        type="number" 
                        placeholder="Quantity" 
                        value={form.quantity} 
                        onChange={(e) => setForm({ ...form, quantity: e.target.value })} 
                        required 
                        className="input-field" 
                    />
                    <input 
                        type="date"  
                        placeholder="Date" 
                        value={form.date} 
                        onChange={(e) => setForm({ ...form, date: e.target.value })} 
                        required 
                        className="input-field" 
                    />
                    <button type="submit" className="login-button">
                        {editingIndex !== null ? 'Update' : 'Add'} Transaction
                    </button>
                </form>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index} className="transaction-item">
                                <td>{transaction.product}</td>
                                <td>{transaction.quantity} pcs</td>
                                <td>{transaction.date}</td>
                                <td>
                                    <button onClick={() => handleEdit(index)} className="action-button">Edit</button>
                                    <button onClick={() => handleDelete(index)} className="action-button">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Add the chart component below the table */}
                {transactions.length > 0 && (
                    <ProductBarChart
                        products={transactions.map(transaction => ({
                            name: transaction.product,
                            quantity: Number(transaction.quantity)
                        }))}
                    />
                )}
            </div>
        </div>
    );
}

export default Transactions;
