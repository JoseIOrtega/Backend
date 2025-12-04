/*
  Warnings:

  - You are about to alter the column `progreso` on the `laboratorios_participantes` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(2))` to `Enum(EnumId(3))`.

*/
-- AlterTable
ALTER TABLE `laboratorios_participantes` MODIFY `progreso` ENUM('no iniciado', 'en progreso', 'finalizado') NOT NULL DEFAULT 'no iniciado';
