class DeveloperController < Sinatra::Base 

    set :default_content_type, 'application/json'

    get '/developers' do
        @developers = Developer.all
        @developers.to_json(include: [:clients, :invoices, :services])
    end

    get '/developers/:email' do 
        @developer = Developer.find_by(email: params[:email])
        if @developer
        @developer.to_json(include: :invoices)
        else
            status 401
            {message: "Developer not found"}.to_json
        end
    end


    get '/developers/:id' do 
        @developer = Developer.find(params[:id])
        @developer.to_json
    end

    post '/developers' do 
        if Developer.find_by(email: params[:email])
            status 401
            {message: "Email already exists"}.to_json
        else
        @developer = Developer.create(
            name: params[:name],
            email: params[:email],
            password: params[:password],
            phone_number: params[:phone_number],
            location: params[:location],
        )
        @developer.to_json
        end
    end

    patch '/developers/:id' do 
        @developer = Developer.find(params[:id])
        @developer.update(
            name: params[:name],
            email: params[:email],
            password: params[:password],
            phone_number: params[:phone_number],
            location: params[:location],
        )
        @developer.to_json
    end

    delete '/developers/:id' do
        @developer = Developer.find(params[:id])
        @developer.destroy
        @developer.to_json
    end





end