require_relative './config/environment'
require 'sinatra/activerecord/rake'

desc "Start the server using rerun"
task :server do
    if ActiveRecord::Base.connection.migration_context.needs_migration?
        puts "Migrations are pending. Run `rake db:migrate` to resolve the issue."
        return
    end

    ENV['PORT'] ||= '9292'
    rackup = "rackup -p #{ENV['PORT']}"
    exec "bundle exec rerun -b '#{rackup}'"
    end

desc "Start the console"
task :console do
    ActiveRecord::Base.logger = Logger.new(STDOUT)
    Pry.start 
    end