class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :name
      t.string :director
      t.string :synopsis
      t.integer :year
      t.integer :rate

      t.timestamps
    end
  end
end
