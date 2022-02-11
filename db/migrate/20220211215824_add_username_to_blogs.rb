class AddUsernameToBlogs < ActiveRecord::Migration[6.1]
  def change
    add_column :blogs, :username, :string
  end
end
