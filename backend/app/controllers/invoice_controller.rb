class InvoiceController < Sinatra::Base 

    set :default_content_type, 'application/json'

    get '/invoices' do
        @invoices = Invoice.all
        @invoices.to_json
    end

    get '/invoices/:id' do
        @invoice = Invoice.find(params[:id])
        @invoice.to_json
    end

    post '/invoices' do
        @invoice = Invoice.create(
            number: params[:number],
            amount: params[:amount],
            date: params[:date],
            due_date: params[:due_date],
            paid: params[:paid],
            service_id: params[:service_id],
        )
        @invoice.to_json
    end

    patch '/invoices/:id' do
        @invoice = Invoice.find(params[:id])
        @invoice.update(
            number: params[:number],
            amount: params[:amount],
            date: params[:date],
            date_due: params[:date_due],
            paid: params[:paid],
            service_id: params[:service_id],
        )
        @invoice.to_json
    end

    delete '/invoices/:id' do
        @invoice = Invoice.find(params[:id])
        @invoice.destroy
        @invoice.to_json
    end


end