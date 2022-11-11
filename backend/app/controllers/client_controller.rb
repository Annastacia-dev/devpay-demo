class ClientController < Sinatra::Base 

    set :default_content_type, 'application/json'

    get '/clients' do
        @clients = Client.all
        @clients.to_json    
    end

    get '/clients/:id' do 
            @client = Client.find(params[:id])
            @client.to_json
        end

    post '/clients' do
        @client = Client.create(
            name: params[:name],
            email: params[:email],
            phone_number: params[:phone_number],
            location: params[:location],
        )
        @client.to_json
    end

    patch '/clients/:id' do
        @client = Client.find(params[:id])
        @client.update(
            name: params[:name],
            email: params[:email],
            phone_number: params[:phone_number],
            location: params[:location],
        )
        @client.to_json
    end

    delete '/clients/:id' do
        @client = Client.find(params[:id])
        @client.destroy
        @client.to_json
    end

end