class Blog < ApplicationRecord
  belongs_to :user
  validates :title, presence: true
  validates :thought, presence: true
end
