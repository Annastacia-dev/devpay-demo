puts "🌱 Seeding data..."
# Developers
5.times do
    Developer.create!(
        name: Faker::Name.name,
        email: Faker::Internet.email,
        location: Faker::Address.city,
        password: "password",
        phone_number: Faker::Number.number(digits: 10),
        
    )
end

# Clients
25.times do
    Client.create!(
        name: Faker::Name.name,
        email: Faker::Internet.email,
        location: Faker::Address.city,
        phone_number: Faker::Number.number(digits: 10),
        
    )
end

# Services
25.times do
    Service.create!(
        name: Faker::Job.title,
        description: Faker::Lorem.paragraph,
        rate_per_hour: Faker::Number.number(digits: 3),
        client_id: Client.all.sample.id,
        developer_id: Developer.all.sample.id
    )
end

# Invoices

25.times do
    Invoice.create!(
        number: Faker::Number.number(digits: 4),
        amount: Faker::Number.number(digits: 3),
        date: Faker::Date.between(from: 2.years.ago, to: Date.today),
        due_date: Faker::Date.between(from: 2.years.ago, to: Date.today),
        paid: Faker::Boolean.boolean,
        service_id: Service.all.sample.id
    )
end

puts "Done seeding 🌱!"


