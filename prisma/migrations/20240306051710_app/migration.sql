/*
  Warnings:

  - Made the column `boardfile` on table `Notice` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Notice` MODIFY `boardfile` VARCHAR(191) NOT NULL;
