<?php

namespace App\Http\Resources\v1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class InvoiceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'sellerName' => $this->sellerName,
            'sellerPhone' => $this->sellerPhone,
            'sellerAddress' => $this->sellerAddress,
            'sellerEmail' => $this->sellerEmail,
            'sellerBankName' => $this->sellerBankName,
            'sellerBankAccountHolder' => $this->sellerBankAccountHolder,
            'sellerBankAccount' => $this->sellerBankAccount,
            'sellerWebsite' => $this->sellerWebsite,
            'clientName' => $this->clientName,
            'clientAddress' => $this->clientAddress,
            'driverName' => $this->driverName,
            'driverId' => $this->driverId,
            'vehicle' => $this->vehicle,
            'clearingAgent' => $this->clearingAgent,
            'date' => $this->date,
            'notes' => $this->notes
        ];
    }
}
