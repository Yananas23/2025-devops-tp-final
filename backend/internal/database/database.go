package database

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/golang-migrate/migrate/v4"
	_ "github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	"github.com/jackc/pgx/v5/pgxpool"
)

var DB *pgxpool.Pool

func RunMigrations() error {
	dbURL := os.Getenv("DATABASE_URL")
	if dbURL == "" {
		panic("environment variable DATABASE_URL is not set")
	}

	m, err := migrate.New(
		"file://migrations",
		dbURL,
	)
	if err != nil {
		return fmt.Errorf("failed to create migrate instance: %w", err)
	}
	defer m.Close()

	if err := m.Up(); err != nil && err != migrate.ErrNoChange {
		return fmt.Errorf("failed to run migrations: %w", err)
	}

	if err == migrate.ErrNoChange {
		log.Println("No new migrations to apply")
	} else {
		log.Println("Migrations applied successfully")
	}

	return nil
}

func Connect() error {
	dbURL := os.Getenv("DATABASE_URL")
	if dbURL == "" {
		panic("environment variable DATABASE_URL is not set")
	}

	config, err := pgxpool.ParseConfig(dbURL)
	if err != nil {
		return fmt.Errorf("failed to parse database URL: %w", err)
	}

	pool, err := pgxpool.NewWithConfig(context.Background(), config)
	if err != nil {
		return fmt.Errorf("failed to create connection pool: %w", err)
	}

	if err := pool.Ping(context.Background()); err != nil {
		return fmt.Errorf("failed to ping database: %w", err)
	}

	DB = pool
	log.Println("Successfully connected to database")
	return nil
}

func Close() {
	if DB != nil {
		DB.Close()
	}
}
