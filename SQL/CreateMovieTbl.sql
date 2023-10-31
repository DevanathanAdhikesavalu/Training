use TestDB;
CREATE TABLE [movietbl](
[ID] [int] NOT NULL,
[Title] [nvarchar](20) NOT NULL,
[Language] [nvarchar](20) NOT NULL,
[Hero] [nvarchar](20) NOT NULL,
[Director] [nvarchar](20) NOT NULL,
[MusicDirector] [nvarchar](20) NOT NULL,
[ReleaseDate][date],
[Cost][numeric](18,0) NOT NULL,
[Collection][numeric](18,0) NOT NULL,
[Review][nvarchar](20) NOT NULL,
CONSTRAINT[pk_movietbl] PRIMARY KEY CLUSTERED ([ID]ASC));

SELECT * FROM movietbl;