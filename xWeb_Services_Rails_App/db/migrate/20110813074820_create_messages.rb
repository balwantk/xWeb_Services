class CreateMessages < ActiveRecord::Migration
  def self.up
    create_table :messages do |t|
      t.string :request
      t.string :email_id
      t.string :first_name
      t.string :last_name
      t.integer :cell_number
      t.string :company_name

      t.timestamps
    end
  end

  def self.down
    drop_table :messages
  end
end
