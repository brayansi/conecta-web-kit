import { Component, h, Method, Prop, State } from '@stencil/core';

export interface Toast {
  id: string;
  message: string;
  variant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'neutral';
  duration: number;
  closable: boolean;
  timestamp: number;
}

@Component({
  tag: 'conecta-toaster',
  styleUrl: 'conecta-toaster.scss',
  shadow: true,
})
export class ConectaToaster {
  /**
   * Posição do toaster na tela
   */
  @Prop({ reflect: true }) position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' = 'top-right';

  /**
   * Número máximo de toasts simultâneos
   */
  @Prop({ reflect: true }) maxToasts: number = 5;

  /**
   * Z-index do container
   */
  @Prop({ reflect: true }) zIndex: number = 9999;

  @State() private toasts: Toast[] = [];

  private timers: Map<string, number> = new Map();
  private newToastIds: Set<string> = new Set();

  /**
   * Adiciona um toast ao toaster
   */
  @Method()
  async addToast(toast: Omit<Toast, 'id' | 'timestamp'>): Promise<string> {
    const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
    const newToast: Toast = {
      ...toast,
      id,
      timestamp: Date.now(),
    };

    // Prepara o novo array de toasts
    let updatedToasts: Toast[] = [];

    // Se já atingiu o limite, remove o mais antigo e adiciona o novo em uma única operação
    if (this.toasts.length >= this.maxToasts) {
      const oldestToast = this.toasts[0];

      // Limpa o timer do toast mais antigo
      const oldestTimer = this.timers.get(oldestToast.id);
      if (oldestTimer !== undefined) {
        window.clearTimeout(oldestTimer);
        this.timers.delete(oldestToast.id);
      }

      // Cria novo array: mantém toasts existentes (exceto o primeiro) e adiciona o novo
      // Isso minimiza re-renders porque mantém os IDs dos toasts existentes
      updatedToasts = this.toasts.slice(1);
      updatedToasts = [...updatedToasts, newToast];
    } else {
      // Ainda há espaço, apenas adiciona o novo
      updatedToasts = [...this.toasts, newToast];
    }

    // Marca o novo toast para receber animação
    this.newToastIds.add(id);

    // Atualiza o estado uma única vez
    this.toasts = updatedToasts;

    // Remove a flag de "novo" após a animação terminar
    setTimeout(() => {
      this.newToastIds.delete(id);
    }, 300);

    // Configura timer para auto-remoção se duration > 0
    if (newToast.duration > 0) {
      const timerId = window.setTimeout(() => {
        this.removeToast(id);
      }, newToast.duration);
      this.timers.set(id, timerId);
    }

    return id;
  }

  /**
   * Remove um toast pelo ID
   */
  @Method()
  async removeToast(id: string): Promise<void> {
    // Limpa o timer se existir
    const timerId = this.timers.get(id);
    if (timerId !== undefined) {
      window.clearTimeout(timerId);
      this.timers.delete(id);
    }

    // Remove do Set de novos toasts se estiver lá
    this.newToastIds.delete(id);

    // Remove o toast imediatamente sem animação
    this.toasts = this.toasts.filter(toast => toast.id !== id);
  }

  /**
   * Limpa todos os toasts
   */
  @Method()
  async clearAll(): Promise<void> {
    // Limpa todos os timers
    this.timers.forEach(timerId => window.clearTimeout(timerId));
    this.timers.clear();

    // Limpa o array
    this.toasts = [];
  }

  private handleClose = (id: string) => {
    this.removeToast(id);
  };

  private getDefaultIcon(variant: Toast['variant']): string {
    switch (variant) {
      case 'success':
        return 'check-circle';
      case 'danger':
        return 'x-circle';
      case 'warning':
        return 'alert-triangle';
      case 'info':
        return 'info';
      case 'primary':
      case 'secondary':
      case 'neutral':
      default:
        return 'bell';
    }
  }

  render() {
    return (
      <div class="conecta-toaster" style={{ zIndex: `${this.zIndex}` }}>
        {this.toasts.map(toast => (
          <div
            key={toast.id}
            class={`conecta-toast conecta-toast--${toast.variant} ${toast.closable ? 'conecta-toast--closable' : ''}`}
            data-toast-new={this.newToastIds.has(toast.id) ? 'true' : undefined}
            role="alert"
            aria-live="polite"
            aria-atomic="true"
          >
            <div class="conecta-toast__content">
              <conecta-icon name={this.getDefaultIcon(toast.variant)} variant={toast.variant} size="medium" class="conecta-toast__icon"></conecta-icon>
              <span class="conecta-toast__message">{toast.message}</span>
            </div>
            {toast.closable && (
              <button type="button" class="conecta-toast__close" onClick={() => this.handleClose(toast.id)} aria-label="Fechar notificação">
                <conecta-icon name="x" variant="neutral" size="small"></conecta-icon>
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }
}
