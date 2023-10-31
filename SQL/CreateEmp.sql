use TestDB;

CREATE TABLE [emptbl](
[eno] [int] NOT NULL,
[name] [nvarchar](20) NOT NULL,
[salary][numeric](18,0) NOT NULL,
[city][nvarchar](20) NOT NULL,
CONSTRAINT[PK_emptbl] PRIMARY KEY CLUSTERED ([eno]ASC));

ALTER TABLE [emptbl] WITH CHECK ADD CONSTRAINT [CK_EMPTBL_City] CHECK (([city]='Chennai' OR [city]='Bgl'))