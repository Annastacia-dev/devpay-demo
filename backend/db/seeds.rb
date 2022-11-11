puts 'seeding data...'
# ************************************************************************************************************************ #

# Developers
dev1 = Developer.create(name: 'Anna Kioko', email: 'anna01@gmail.com', password: '12345', phone_number: 254716983754, location: 'Nairobi')

dev2 = Developer.create(name: 'Ashley Njoroge', email: 'ash02@gmail.com', password: '78901', phone_number: 254729183024, location: 'Arusha')

dev3 = Developer.create(name: 'Benson Otieno', email: 'ben03@gmail.com', password: '76543', phone_number: 254796045712, location: 'Wajir')

# ************************************************************************************************************************ #

# Clients
client1 = Client.create(name: 'John Stone', email: 'john01@gmail.com', phone_number: 254792863281, location: 'Eldoret', developer_id: dev1.id)

client2 = Client.create(name: 'Kimberly Musyoka', email: 'kimberly02@gmail.com', phone_number: 254727843564, location: 'Kampala', developer_id: dev2.id)

client3 = Client.create(name: 'Dennis Cheruyot', email: 'dennis03@gmail.com', phone_number: 254793525892, location: 'Kigali', developer_id: dev3.id)

client4 = Client.create(name: 'Rose Lynne', email: 'rose04@gmail.com', phone_number: 254756192091, location: 'Seattle', developer_id: dev1.id)

client5 = Client.create(name: 'Alvin Clain', email: 'alvin05@gmail.com', phone_number: 25475896120, location: 'Busia', developer_id: dev2.id)

client6 = Client.create(name: 'Mary Wambui', email: 'mary06@gmail.com', phone_number: 254730192032, location: 'Abuja', developer_id: dev3.id)

client7 = Client.create(name: 'Benjamin Okoth', email: 'benjamin07@gmail.com', phone_number: 254779025610, location: 'Kinshasa', developer_id: dev1.id)

client8 = Client.create(name: 'Leslie Wali', email: 'leslie08@gmail.com', phone_number: 254733289013, location: 'Punjabi', developer_id: dev2.id)

client9 = Client.create(name: 'Steve Mburu', email: 'steve09@gmail.com',  phone_number: 25477971206, location: 'London', developer_id: dev3.id)

client10 = Client.create(name: 'Abdi Omar', email: 'abdi10@gmail.com', phone_number: 2547792064710, location: 'Rome', developer_id: dev1.id)

# ************************************************************************************************************************ #
# Services 
service1 = Service.create!(name: "Web Development", description: "Web development is the work involved in developing a web site for the Internet (World Wide Web) or an intranet (a private network).", rate_per_hour: 500,client_id: client1.id, developer_id: dev1.id)

service2 = Service.create!(name: "App Development", description: "App development is the work involved in developing an application to  host and access different services", rate_per_hour: 750,client_id: client3.id, developer_id: dev2.id)

service3 = Service.create!(name: "Graphic Design", description: "Graphic design is is a profession, applied art and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives.", rate_per_hour: 680,client_id: client5.id, developer_id: dev3.id)

service4 = Service.create!(name: "Database Management", description: "Database Management is process of organizing, storing & retrieving data in a DBMS. A database management system (DBMS) is system software for creating and managing databases.", rate_per_hour: 490,client_id: client2.id, developer_id: dev1.id)

service5 = Service.create!(name: "Android Development", description: "An android developer designs software and applications for Android devices and the Google Play Store.", rate_per_hour: 820,client_id: client8.id, developer_id: dev2.id)

# *********************************************************************************************************************
# Invoices 
invoice1 = Invoice.create!(amount: 7050, number: 321, date:"2021-05-11", due_date:"2021-06-06", service_id: service1.id)

invoice2 = Invoice.create!(amount: 8100, number: 322, date:"2021-06-21", due_date:"2021-07-03", service_id: service2.id)

invoice3 = Invoice.create!(amount: 5390, number: 323, date:"2021-07-07", due_date:"2021-07-17", service_id: service3.id)

invoice4 = Invoice.create!(amount: 6700, number: 324, date:"2021-08-23", due_date:"2021-09-01", service_id: service4.id)

invoice5 = Invoice.create!(amount: 11500, number: 325, date:"2021-09-02", due_date:"2021-09-14", service_id: service5.id)

invoice6 = Invoice.create!(amount: 9200, number: 326, date:"2021-09-23", due_date:"2021-10-05", service_id: service1.id)

invoice7 = Invoice.create!(amount: 4550, number: 327, date:"2021-10-12", due_date:"2021-10-20", service_id: service2.id)

invoice8 = Invoice.create!(amount: 3200, number: 328, date:"2021-11-01", due_date:"2021-11-11", service_id: service3.id)

invoice9 = Invoice.create!(amount: 2000, number: 329, date:"2021-11-11", due_date:"2021-11-21", service_id: service4.id)

invoice10 = Invoice.create!(amount: 7000, number: 330, date:"2021-12-01", due_date:"2021-12-20", service_id: service5.id)

# ************************************************************************************************************************ #


puts 'Done seeding'
