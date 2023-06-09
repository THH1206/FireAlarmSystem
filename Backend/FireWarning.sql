USE [FireWarning]
GO
/****** Object:  Table [dbo].[SensorData]    Script Date: 12/17/2022 11:45:34 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SensorData](
	[companyID] [int] IDENTITY(1,1) NOT NULL,
	[companyName] [nvarchar](50) NOT NULL,
	[time] [datetime] NOT NULL,
	[status] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_SensorData] PRIMARY KEY CLUSTERED 
(
	[companyID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[SensorData] ON 

INSERT [dbo].[SensorData] ([companyID], [companyName], [time], [status]) VALUES (20, N'E', CAST(N'2021-05-25T03:00:12.000' AS DateTime), N'SAFE  ')
INSERT [dbo].[SensorData] ([companyID], [companyName], [time], [status]) VALUES (21, N'E', CAST(N'2021-05-25T03:00:12.000' AS DateTime), N'SAFE  ')
INSERT [dbo].[SensorData] ([companyID], [companyName], [time], [status]) VALUES (22, N'E', CAST(N'2021-05-25T03:00:12.000' AS DateTime), N'SAFE  ')
INSERT [dbo].[SensorData] ([companyID], [companyName], [time], [status]) VALUES (23, N'E', CAST(N'2021-05-25T03:00:12.000' AS DateTime), N'SAFE  ')
INSERT [dbo].[SensorData] ([companyID], [companyName], [time], [status]) VALUES (24, N'E', CAST(N'2021-05-25T03:00:12.000' AS DateTime), N'WARNING - RUN')
INSERT [dbo].[SensorData] ([companyID], [companyName], [time], [status]) VALUES (25, N'E', CAST(N'2021-05-25T03:00:12.000' AS DateTime), N'SAFE  ')
INSERT [dbo].[SensorData] ([companyID], [companyName], [time], [status]) VALUES (26, N'E', CAST(N'2021-05-25T03:00:12.000' AS DateTime), N'SAFE  ')
INSERT [dbo].[SensorData] ([companyID], [companyName], [time], [status]) VALUES (27, N'E', CAST(N'2021-05-25T03:00:12.000' AS DateTime), N'SAFE  ')
SET IDENTITY_INSERT [dbo].[SensorData] OFF
GO
