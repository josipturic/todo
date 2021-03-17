using System;

namespace Application.Common.Exceptions
{
    public class UniqueConstraintException : Exception
    {
        public UniqueConstraintException(string constraintName, object constraintKey)
            : base($"\"{constraintName}\" ({constraintKey}) already exists.")
        {
        }
    }
}
