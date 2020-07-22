# README

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user-id|integer|null: false, foreign_key: true|
|group-id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null.false, index: true, unique: true|
|email|string|null.false|
|password|string|null.false|

### Association
- has_many :groups, through :group_users
- has_many :groups_users
- has_many :messages

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null.false, index: true, unique: true|

### Association
- has_many :users, through :group_users
- has_many :groups_users
- has_many :messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user