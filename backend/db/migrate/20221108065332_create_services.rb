class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.string :name
      t.string :description
      t.integer :rate_per_hour
      t.integer :amount
      t.integer :client_id
      t.integer :developer_id
      t.timestamps
    end
  end
end
