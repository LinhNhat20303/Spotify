create table roles(
	Role_Id int primary key IDENTITY,
	Role_Name varchar(50)
 
)
create table Categories(
	Category_id int primary key IDENTITY,
	Category_Name varchar(50) not null
)


create table Accounts(
	Account_id int  primary key IDENTITY,
	User_Name varchar(50) not null,
	Password varchar(50) not null,
	RoleID int,
	Email varchar(50),
	Dob date,
	Name varchar(50),
	Link_Social varchar(50),
	Link_Social2 varchar(50),
	Status bit,
	FOREIGN key(RoleID) REFERENCES roles(Role_Id),
)
create table Songs(
	Song_ID int primary key IDENTITY,
	Song_Name varchar(50),
	Artist_ID int,
	Year_Release int,
	Image varchar(1000),
	Category_id int,
	Status bit,
	FOREIGN key(Category_id) REFERENCES Categories(Category_id),
	FOREIGN key(Artist_ID) REFERENCES Accounts(Account_id)
)



create table Albums(
	Album_id int primary key IDENTITY,
	Album_Name varchar(50) not null,
	Artist_ID int not null,
	Song_ID int not null,
	Year_Release int,
	Image_Cover varchar(1000),
	Description varchar(100),
	Status bit,
	FOREIGN key(Artist_ID) REFERENCES Accounts(Account_id),
	FOREIGN key(Song_ID) REFERENCES Songs(Song_ID),

)


Create table Playlists(
	Playlist_id int primary key IDENTITY,
	Playlist_Name varchar(50),
	Created_at date,
	Status bit,
)
Create table Account_Playlist(
	id int primary key IDENTITY,
	account_id int,
	Playlist_id int,
	FOREIGN key(account_id) REFERENCES Accounts(Account_id),
	FOREIGN key(Playlist_id) REFERENCES Playlists(Playlist_id)
)
Create table Playlist_Song(
	id int primary key IDENTITY,
	PlaylistID int,
	Song_ID int,
	FOREIGN key(PlaylistID) REFERENCES Playlists(Playlist_id),
	FOREIGN key(Song_ID) REFERENCES Songs(Song_ID)
)

Create table Follows(
	 id int primary key iDENTITY,
	 FollowerID int not null,
	 FollowingID int not null,
	 FOREIGN key(FollowerID) REFERENCES Accounts(Account_id),
	 FOREIGN key(FollowingID) REFERENCES Accounts(Account_id),
)
Create table Orders(
	Orderid int primary key IDENTITY,
	Order_Code varchar(50) not null,
	Order_Status bit ,
	Order_Date date,
	Account_ID int not null,
	FOREIGN key(Account_ID) REFERENCES Accounts(Account_id),
)
Create table Order_Ablum(
	id int primary key IDENTITY,
	Order_ID int not null,
	AblumID int not null,
	Status bit,
	FOREIGN key(Order_ID) REFERENCES Orders(Orderid),
	FOREIGN key(AblumID) REFERENCES Albums(Album_id),
)


