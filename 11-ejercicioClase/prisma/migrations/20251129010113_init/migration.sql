-- CreateTable
CREATE TABLE `Disciplina` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Torneo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `disciplinaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Torneo` ADD CONSTRAINT `Torneo_disciplinaId_fkey` FOREIGN KEY (`disciplinaId`) REFERENCES `Disciplina`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
