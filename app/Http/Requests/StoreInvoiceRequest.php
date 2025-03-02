<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreInvoiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [

            'invoiceNo' => ['required', 'min:1'],
            'date' => ['required', 'date'],
            'dueDate' => ['required', 'date'],
            'sellerName' => ['required', 'min:3'],
            'sellerPhone' => ['required', 'min:7'],
            'sellerAddress' => ['required', 'min:3'],
            'sellerEmail' => [],
            'sellerBankName' => ['required', 'min:4'],
            'sellerBankAccountHolder' => ['required', 'min:4'],
            'sellerBankAccount' => [],
            'sellerWebsite' => [],
            'clientName' => ['required', 'min:4'],
            'clientAddress' => ['required', 'min:4'],
            'driverName' => ['required', 'min:4'],
            'driverId' => ['required', 'min:5'],
            'vehicle' => ['required', 'min:5'],
            'clearingAgent' => ['required', 'min:4'],
            'notes' => ['required', 'min:5'],
            'itemNo' => ['required', 'min:1'],
            'description' => ['required', 'min:3'],
            'quantity' => ['required', 'min:1'],
            'unitPrice' => ['required', 'min:1'],
            'amount' => [],
            'totalAmount' => [],

        ];
    }
}
