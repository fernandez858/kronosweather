-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: kronostiempodb
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `favoritos`
--

DROP TABLE IF EXISTS `favoritos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favoritos` (
  `idfavoritos` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) DEFAULT NULL,
  `lat` varchar(45) DEFAULT NULL,
  `lon` varchar(45) DEFAULT NULL,
  `ciudad` varchar(255) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `countrycode` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`idfavoritos`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favoritos`
--

LOCK TABLES `favoritos` WRITE;
/*!40000 ALTER TABLE `favoritos` DISABLE KEYS */;
INSERT INTO `favoritos` VALUES (32,NULL,'40.51588721022959','-3.4870057548014377','Pl Sector 4 86, Ajalvir, MD, Spain','Spain','ESP'),(33,NULL,'40.34654412118006','-3.802741480144272','Av Esparteros Los 35, Leganés, MD, Spain','Spain','ESP'),(34,NULL,'9.102096738726456','-65.74777999232137','Hato San Gerónimo, GU, Venezuela','Venezuela','VEN'),(35,NULL,'10.485111173601636','-66.89294723341527','MRW, DF, Venezuela','Venezuela','VEN'),(36,NULL,'10.466205555063882','-66.79684152679118','Topo Carpintero, MI, Venezuela','Venezuela','VEN'),(37,NULL,'10.409481792727005','-66.68151467884229','Paz Castillo, MI, Venezuela','Venezuela','VEN'),(38,NULL,'10.422988388338242','-61.23953498500738','Couva-Tabaquite-Talparo, Trinidad and Tobago','Trinidad and Tobago','TTO'),(44,'fernandez858@gmail.com','38.95940879245423','-112.15705174220469','Mason Gulch, Millard County, UT, USA','United States','USA'),(46,'fernandez858@gmail.com','44.08758502824518','11.601562500000002','Rio della Busca, Marradi, FI, Italy','Italy','ITA'),(47,'fernandez858@gmail.com','6.315298538330033','-64.68750000000001','Sucre, BO, Venezuela','Venezuela','VEN'),(49,'fernandez858@gmail.com','52.696361078274485','-116.3671875','Clearwater, AB, Canada','Canada','CAN'),(55,'fernandez858@gmail.com','10.506098','-66.9146017','Plaza Bolívar, Caracas, DF, Venezuela','Venezuela','VEN'),(56,NULL,'25.005972656239187','77.16796875000001','Sāretha Reserved Forest, MP, India','India','IND'),(57,'fernandez858@gmail.com','22.755920681486405','78.39843750000001','Korni Nadi, MP, India','India','IND'),(58,'fernandez858@gmail.com','40.4167047','-3.7035825','Carretas, Madrid, Spain','Spain','ESP');
/*!40000 ALTER TABLE `favoritos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-24  0:28:26
