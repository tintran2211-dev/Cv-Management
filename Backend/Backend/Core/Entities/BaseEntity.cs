﻿using System.ComponentModel.DataAnnotations;

namespace Backend.Core.Entities
{
    public abstract class BaseEntity
    {
        [Key]
        public long Id { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public DateTime UpdateAt { get; set; } = DateTime.Now;

        public bool IsActive { get; set; } = true;
    }
}
