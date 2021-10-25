CREATE TABLE `Brand` (
  `BrandID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`BrandID`)
);

CREATE TABLE `Type` (
  `TypeID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  PRIMARY KEY (`TypeID`)
);

CREATE TABLE `Beer` (
  `BeerID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Type` int(11) DEFAULT NULL,
  `Volume` float DEFAULT NULL,
  `Brand` int(11) NOT NULL,
  PRIMARY KEY (`BeerID`),
  KEY `BeerType_idx` (`Type`),
  KEY `BeerBrand_idx` (`Brand`),
  CONSTRAINT `BeerBrand` FOREIGN KEY (`Brand`) REFERENCES `Brand` (`BrandID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `BeerType` FOREIGN KEY (`Type`) REFERENCES `Type` (`TypeID`) ON DELETE NO ACTION ON UPDATE NO ACTION
);

CREATE TABLE `Review` (
  `ReviewID` int(11) NOT NULL AUTO_INCREMENT,
  `Stars` float NOT NULL,
  `Beer` int(11) DEFAULT NULL,
  PRIMARY KEY (`ReviewID`),
  KEY `ReviewOfBeer_idx` (`Beer`),
  CONSTRAINT `ReviewOfBeer` FOREIGN KEY (`Beer`) REFERENCES `Beer` (`BeerID`) ON DELETE NO ACTION ON UPDATE NO ACTION
);