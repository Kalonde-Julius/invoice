<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreInvoiceRequest;
use App\Http\Resources\v1\InvoiceResource;
use App\Models\Invoice;

class InvoiceController extends Controller
{
    public function index()
    {
       // return InvoiceResource::collection(Invoice::all());
       return response()->json("Invoice Index");
    } 

    public function show(Invoice $invoice)
    {
        return new InvoiceResource($invoice);
    }

    public function store(StoreInvoiceRequest $request)
    {
        invoice::create($request->validated());
        return response()->json("Invoice created");
    }

    public function update(StoreInvoiceRequest $request, Invoice $invoice)
    {
        $invoice->update($request->validated());
        return response()->json("Invoice updated");
    }

    public function destroy(Invoice $invoice)
    {
        $invoice->delete();
        return response()->json("Invoice deleted");
    }
}
