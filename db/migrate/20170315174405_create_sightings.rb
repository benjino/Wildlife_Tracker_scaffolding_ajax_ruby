class CreateSightings < ActiveRecord::Migration[5.0]
  def change
    create_table :sightings do |t|
      t.datetime :date
      t.datetime :time
      t.float :latitude
      t.float :longitude
      t.references :animal, foreign_key: true

      t.timestamps
    end
  end
end
