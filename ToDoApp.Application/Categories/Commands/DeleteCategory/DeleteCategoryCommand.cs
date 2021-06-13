using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Categories.Commands.DeleteCategory
{
    public class DeleteCategoryCommand : IRequest
    {
        public int Id { get; set; }

        public class Handler : IRequestHandler<DeleteCategoryCommand>
        {
            private readonly IApplicationDbContext _context;

            public Handler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(DeleteCategoryCommand request, CancellationToken cancellationToken)
            {
                var category = await _context.Categories
                    .FindAsync(request.Id);

                if (category is null)
                {
                    throw new NotFoundException(nameof(Service), request.Id);
                }

                category.CategoryDeleted = true;

                await _context.SaveChangesAsync(cancellationToken);

                return Unit.Value;
            }
        }
    }
}
