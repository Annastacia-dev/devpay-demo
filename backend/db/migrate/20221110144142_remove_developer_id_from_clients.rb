class RemoveDeveloperIdFromClients < ActiveRecord::Migration[6.1]
  def change
    remove_column :clients, :developer_id, :integer
  end
end
