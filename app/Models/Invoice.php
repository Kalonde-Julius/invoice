<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $fillable = [

        'invoiceNo',
        'date',
        'dueDate',
        'sellerName',
        'sellerPhone',
        'sellerAddress',
        'sellerEmail',
        'sellerBankName',
        'sellerBankAccountHolder',
        'sellerBankAccount',
        'sellerWebsite',
        'clientName',
        'clientAddress',
        'driverName',
        'driverId',
        'vehicle',
        'clearingAgent',
        'notes',
        'itemNo',
        'description',
        'quantity',
        'unitPrice',
        'amount',
        'totalAmount',

            ];
}
