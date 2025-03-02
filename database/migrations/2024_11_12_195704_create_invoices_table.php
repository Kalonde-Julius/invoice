<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->integer('invoiceNo');
            $table->date('date');
            $table->date('dueDate');
            $table->string('sellerName');
            $table->string('sellerPhone');
            $table->string('sellerAddress');
            $table->string('sellerEmail');
            $table->string('sellerBankName');
            $table->string('sellerBankAccountHolder');
            $table->string('sellerBankAccount');
            $table->string('sellerWebsite');
            $table->string('clientName');
            $table->string('clientAddress');
            $table->string('driverName');
            $table->string('driverId');
            $table->string('vehicle');
            $table->string('clearingAgent');
            $table->string('notes');
            $table->integer('itemNo');
            $table->string('description');
            $table->integer('quantity');
            $table->float('unitPrice');
            $table->float('amount');
            $table->float('totalAmount');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
