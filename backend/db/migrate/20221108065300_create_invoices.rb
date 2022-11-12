class CreateInvoices < ActiveRecord::Migration[6.1]
  def change
    create_table :invoices do |t|
      t.string :name
      t.integer :number
      t.integer :amount
      t.datetime :date
      t.datetime :due_date
      t.boolean :paid
      t.integer :service_id
      t.timestamps
    end
  end
end
