/*
  Warnings:

  - You are about to alter the column `boardfile` on the `Notice` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `Notice` MODIFY `boardfile` JSON NULL;
